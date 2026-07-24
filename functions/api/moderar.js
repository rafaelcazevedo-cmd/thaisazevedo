/**
 * Moderation endpoint: the approve/delete links in Thais's notification email.
 * GET /api/moderar?id=<n>&acao=aprovar|excluir&token=<hmac>
 * Token = HMAC-SHA256(MOD_SECRET, "id:acao") — only email recipients have it.
 */
import { sign } from './depoimentos.js';

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  const acao = url.searchParams.get('acao');
  const token = url.searchParams.get('token');

  if (!id || !['aprovar', 'excluir'].includes(acao) || !token) return page('Link inválido.', 400);
  const expected = await sign(env.MOD_SECRET, `${id}:${acao}`);
  if (!timingSafeEqual(token, expected)) return page('Link inválido ou expirado.', 403);

  const row = await env.DB.prepare('SELECT id, nome FROM depoimentos WHERE id = ?').bind(id).first();
  if (!row) return page('Esse depoimento não existe mais.', 404);

  if (acao === 'aprovar') {
    await env.DB.prepare("UPDATE depoimentos SET status = 'aprovado' WHERE id = ?").bind(id).run();
    return page(`Pronto! O depoimento de ${row.nome} está publicado em Vidas Transformadas. 💛`);
  }
  await env.DB.prepare('DELETE FROM depoimentos WHERE id = ?').bind(id).run();
  return page(`O depoimento de ${row.nome} foi excluído.`);
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function page(msg, status = 200) {
  return new Response(
    `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Vidas Transformadas</title></head>
<body style="font-family:Georgia,serif;background:#faf6ef;color:#1c3729;display:grid;place-items:center;min-height:100vh;margin:0;padding:24px">
<div style="max-width:480px;text-align:center"><p style="font-size:22px;line-height:1.5">${msg}</p>
<p><a href="/vidas-transformadas" style="color:#2d5a41">Ver a página →</a></p></div></body></html>`,
    { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}
