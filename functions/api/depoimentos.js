/**
 * Vidas Transformadas — depoimentos API (Cloudflare Pages Functions + D1).
 *
 * GET  /api/depoimentos  → approved entries, newest first (public).
 * POST /api/depoimentos  → new entry, saved as 'pendente'; Thais gets a
 *                          moderation email with approve/delete links.
 *
 * Bindings/vars (set in the Pages project):
 *   DB              D1 database (schema: db/schema.sql)
 *   MOD_SECRET      random string, signs the moderation links
 *   RESEND_API_KEY  optional; without it submissions still save, no email goes out
 *   NOTIFY_TO       moderation inbox (defaults to the site email)
 *   NOTIFY_FROM     verified sender for Resend (e.g. site@thaisazevedo.org)
 */

const MAX = { nome: 120, paciente: 120, comentario: 4000 };

export async function onRequestGet({ env }) {
  const { results } = await env.DB.prepare(
    "SELECT id, nome, paciente, comentario, criado_em FROM depoimentos WHERE status = 'aprovado' ORDER BY id DESC"
  ).all();
  return json({ depoimentos: results });
}

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'JSON inválido' }, 400);
  }

  // Honeypot: bots fill it, humans can't see it. Pretend success, save nothing.
  if (body.website) return json({ ok: true });

  const nome = clean(body.nome, MAX.nome);
  const paciente = clean(body.paciente, MAX.paciente) || null;
  const comentario = clean(body.comentario, MAX.comentario);
  if (!nome || !comentario || body.consent !== true) {
    return json({ error: 'nome, comentario e consent são obrigatórios' }, 400);
  }

  const res = await env.DB.prepare(
    "INSERT INTO depoimentos (nome, paciente, comentario, status) VALUES (?, ?, ?, 'pendente')"
  )
    .bind(nome, paciente, comentario)
    .run();
  const id = res.meta.last_row_id;

  // Best-effort notification; a failed email must never lose the submission.
  try {
    await notify(env, new URL(request.url).origin, { id, nome, paciente, comentario });
  } catch (err) {
    console.error('[depoimentos] notify failed:', err);
  }

  return json({ ok: true });
}

async function notify(env, origin, d) {
  if (!env.RESEND_API_KEY) return;
  const aprovar = await modUrl(env, origin, d.id, 'aprovar');
  const excluir = await modUrl(env, origin, d.id, 'excluir');
  const quem = d.paciente ? `${d.nome} (paciente: ${d.paciente})` : d.nome;
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.NOTIFY_FROM ?? 'site@thaisazevedo.org',
      to: [env.NOTIFY_TO ?? 'thaisazevedo@hotmail.com'],
      subject: `Novo depoimento de ${d.nome} — aguardando sua aprovação`,
      html: `
        <p><strong>${esc(quem)}</strong> enviou um depoimento no site:</p>
        <blockquote style="border-left:3px solid #ccc;margin:12px 0;padding:8px 12px;white-space:pre-line">${esc(d.comentario)}</blockquote>
        <p>
          <a href="${aprovar}">✅ Aprovar e publicar</a> &nbsp;·&nbsp;
          <a href="${excluir}">🗑 Excluir</a>
        </p>
        <p style="color:#888;font-size:13px">O depoimento só aparece no site depois que você aprovar.</p>`,
    }),
  });
}

async function modUrl(env, origin, id, acao) {
  const token = await sign(env.MOD_SECRET, `${id}:${acao}`);
  return `${origin}/api/moderar?id=${id}&acao=${acao}&token=${token}`;
}

export async function sign(secret, payload) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function clean(v, max) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
