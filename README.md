# App de cifras (nome provisório)

Uma única fonte, `prototipo/index.html`, publicada de dois jeitos:

| Onde | Para quê | Login e dados |
|---|---|---|
| claude.ai (artifact) | ver e comentar o protótipo | simulados, salvos só no aparelho |
| Vercel (versão de teste) | usar de verdade (ensaio, palco) | login por código de e-mail (Supabase), cifras salvas na conta |

## Protótipo no claude.ai
- Link (privado, abre logado no claude.ai, inclusive no celular): https://claude.ai/artifact/AGuujkoWLJkWPesqhpnR3E
- Para publicar de novo, mantenha o mesmo arquivo: o link continua o mesmo.

## Versão de teste (Vercel + Supabase)
- **Endereço:** https://app-cifras-six.vercel.app (atenção: `app-cifras.vercel.app`, sem "-six", é de outra pessoa)
- GitHub: https://github.com/purgatto-design-dev/app-cifras (privado). Todo `git push` na `main` publica sozinho.
- Vercel: time `purgatto-design`, projeto `app-cifras` (plano Hobby, gratuito).
- Supabase: projeto `app-cifras` (`cqbjdotzvfmmaqyuseet`), organização IEVC, São Paulo, plano gratuito.
- `scripts/build-web.mjs` monta `dist/index.html` a partir do protótipo, com o cabeçalho de documento,
  o cliente da Supabase (CDN, versão fixa) e a configuração pública. Sem `npm install`.
- Variáveis de ambiente (na Vercel; localmente num `.env`, que nunca vai para o git):
  - `SUPABASE_URL`, `SUPABASE_ANON_KEY` (chave pública "anon"; a segurança vem das regras RLS)
  - `SUPABASE_OTP_LENGTH` (opcional, padrão 6: tamanho do código de e-mail)
- Banco: `supabase/schema.sql` (tabela `user_data`, uma linha por conta, com RLS: cada um só vê o seu).
- Supabase → Authentication:
  - Email: ativo. No modelo de e-mail "Magic Link", incluir o código `{{ .Token }}` para chegar o número.
  - URL Configuration → Site URL: o endereço da Vercel.
  - O e-mail padrão da Supabase tem limite baixo de envios por hora; para muita gente, configurar um SMTP.

### Build local
    SUPABASE_URL=... SUPABASE_ANON_KEY=... node scripts/build-web.mjs
    python -m http.server 8765 --directory dist

### Git no SSD
O SSD não registra dono de arquivo, então o git pede uma exceção para esta pasta (já feita neste computador):

    git config --global --add safe.directory E:/CLAUDE/estudio-apps/projetos/app-cifras

## Testar o protótipo localmente
O `prototipo/index.html` não tem `<!doctype>` nem `<meta viewport>` porque a publicação acrescenta esse
cabeçalho. Para ver o layout de celular localmente, use o build (`dist/`) ou uma cópia com este cabeçalho
no topo, em `E:\CLAUDE\tmp`:

    <!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">

## Atalhos
- Palco: → / Page Down próxima música, ← / Page Up anterior, ↓ ↑ viram a página, Espaço inicia ou pausa a rolagem.
