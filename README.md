# Site da Thais, Neuropsicopedagoga (São Paulo)

Site multipágina, estático e otimizado para **SEO** (Google/Bing) e **GEO** (recomendação por
assistentes de IA como ChatGPT, Perplexity e Gemini). Construído em **Astro + Tailwind CSS**.
A conversão acontece pelo **WhatsApp**.

---

## 1. Rodar localmente

> Requer **Node.js 18.20+ / 20.3+ / 22+** (este projeto foi configurado com Node 24 LTS instalado em
> `~/.local/node`). Se `node` não estiver no PATH, rode `export PATH="$HOME/.local/node/bin:$PATH"` antes.

```bash
npm install        # instala dependências (já feito)
npm run dev        # servidor local em http://localhost:4321
npm run build      # gera o site estático em dist/
npm run preview    # pré-visualiza o build de produção
npm run gen:images # regenera og-default.png e apple-touch-icon.png a partir dos SVGs
```

---

## 2. O que a Thais precisa preencher (placeholders)

Todo dado real está marcado com `{{TOKEN}}` ou comentado como `PLACEHOLDER`. **O lugar principal para
editar é [`src/config/site.ts`](src/config/site.ts)** (fonte única de verdade). Confirme/edite:

Já preenchido a partir do material da Thais: **nome**, **formação**, **WhatsApp**, **e-mail**, **bio**,
**foto** e os **serviços/condições**. Ainda falta (todos opcionais para publicar):

| Item | Status / Onde |
| --- | --- |
| Nome, formação, WhatsApp, e-mail | ✅ preenchidos em `src/config/site.ts` |
| Foto profissional | ✅ `public/images/thais.jpg`. Para trocar: `node scripts/optimize-photo.mjs <foto> public/images/thais.jpg 900` |
| Endereço do consultório + CEP | ⬜ opcional, `src/config/site.ts` → `address` (o site já funciona sem; o endereço é "combinado no agendamento"). Ao preencher, o JSON-LD passa a incluí-lo automaticamente. |
| Horários exatos | ⬜ opcional, hoje exibido como "com hora marcada" (`src/config/site.ts` → `hours`) |
| Instagram / Doctoralia / Google | ⬜ `src/config/site.ts` → `social` (importante para SEO/GEO) |
| Logo (opcional) | ⬜ `src/components/Logo.astro` |
| Valores | ⬜ mantidos como "sob consulta"; ajuste se quiser exibir preços |
| Depoimentos | ⬜ **não incluídos**, adicionar só com consentimento real dos responsáveis |
| Fotos de crianças (do PDF) | ⛔ **não publicadas**, exigem consentimento documentado dos responsáveis |

Depois de definir o **domínio final**, atualize `site:` em
[`astro.config.mjs`](astro.config.mjs) e a linha `Sitemap:` em [`public/robots.txt`](public/robots.txt).
Isso corrige automaticamente URLs canônicas, sitemap, Open Graph e o JSON-LD.

> ⚠️ Nada de inventar credenciais, números ou depoimentos, publique apenas informações confirmadas pela Thais.

---

## 3. Estrutura do conteúdo

- **Serviços:** `src/content/services/*.md`
- **Dificuldades atendidas:** `src/content/conditions/*.md`
- **Artigos (blog):** `src/content/blog/*.md`, mantenha o campo `updatedDate` atualizado (sinal de
  frescor importante para GEO) e publique 1–2 artigos novos por mês.
- **Perguntas frequentes:** `src/data/faqs.ts` (gera também o schema `FAQPage`).

---

## 4. O que já vem pronto para SEO + GEO

- Páginas separadas por intenção de busca (serviços, condições, FAQ, blog) em `pt-BR`.
- `<title>`, meta description, canônica, Open Graph e Twitter Card por página.
- **JSON-LD**: `MedicalBusiness` + `Person` + `WebSite` (global), `Service`, `FAQPage`,
  `BlogPosting` (com `dateModified`) e `BreadcrumbList`.
- Blocos de **resposta rápida** (definição clara no topo) e **FAQ** alinhada a perguntas reais, o que
  os motores de IA mais citam.
- `sitemap-index.xml` automático, `robots.txt` liberando crawlers de IA (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, Bingbot) e `llms.txt`.
- Imagens otimizadas, quase nenhum JavaScript → carregamento rápido (bom para ranqueamento).

---

## 5. Publicar

Domínio: **www.thaisazevedo.org** (já definido em `astro.config.mjs` → `site`).
O site é estático, basta subir a pasta `dist/` para qualquer hospedagem.

- **Build command:** `npm run build`
- **Output directory / pasta a publicar:** `dist`

### Publicar na Hostinger (hospedagem compartilhada)

1. Gere o build local: `npm run build` (cria a pasta `dist/`).
2. No **hPanel da Hostinger**, associe o domínio `thaisazevedo.org` à hospedagem
   (*Domínios → Adicionar domínio*). Se o domínio foi comprado na própria Hostinger, ele já aparece.
3. Abra o **Gerenciador de Arquivos** (File Manager) → pasta `public_html` do domínio.
4. **Apague** o `default.php`/`index.html` de exemplo e **envie todo o conteúdo de dentro de `dist/`**
   (não a pasta `dist`, e sim os arquivos que estão dentro dela) para `public_html`.
   Dica: compacte `dist/` em `.zip`, faça upload e use *Extrair* dentro de `public_html`.
5. Em **SSL**, ative o certificado gratuito (Let's Encrypt) para o domínio → o site abre em `https://`.
6. Force o `www` (ou o domínio raiz) como padrão e ative o redirecionamento, para bater com o
   canonical `https://www.thaisazevedo.org`.

> A cada atualização do site, rode `npm run build` de novo e reenvie o conteúdo de `dist/`.
> (Para deploys automáticos via Git, considere depois Cloudflare Pages ou Netlify, gratuitos.)

---

## 6. Checklist pós-publicação (essencial para aparecer no Google e nas IAs)

1. **Google Search Console** → adicionar o site e enviar `sitemap-index.xml`.
2. **Bing Webmaster Tools** → adicionar o site e enviar o sitemap. *(ChatGPT, Perplexity e Copilot
   buscam no índice do Bing, sem isso, a IA não cita o site.)*
3. **Google Business Profile (Google Meu Negócio)** → criar perfil com o **mesmo** nome, endereço e
   telefone (NAP) do site, categoria "Psicopedagogo"/"Neuropsicopedagogo", fotos e horários.
4. **Doctoralia** → criar perfil profissional (forte sinal de autoridade e citação).
5. **Instagram** → manter ativo e linkado no site (`social.instagram`).
6. Manter o **NAP idêntico** em todos os lugares e publicar artigos com regularidade.

Quanto mais fontes confiáveis descreverem a Thais de forma consistente, mais as IAs ganham confiança
para recomendá-la.
