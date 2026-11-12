// Monta o site da Vercel a partir do protótipo (sem dependências).
// - prototipo/index.html continua sendo a fonte única (é a mesma página publicada no claude.ai).
// - Aqui ela ganha o cabeçalho de documento, o cliente da Supabase e a configuração pública do projeto.
// - A URL e a chave pública (anon) vêm das variáveis de ambiente da Vercel; nada fica gravado no código.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, cpSync } from 'node:fs';

const url = process.env.SUPABASE_URL;
const anon = process.env.SUPABASE_ANON_KEY;
const otpLen = Number(process.env.SUPABASE_OTP_LENGTH || 6);
if (!url || !anon) {
  console.error('Faltam as variáveis SUPABASE_URL e SUPABASE_ANON_KEY (configure na Vercel ou num .env local).');
  process.exit(1);
}

const app = readFileSync('prototipo/index.html', 'utf8');
const head = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#070A06">
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-title" content="Octave">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="manifest" href="/manifest.webmanifest">
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js"></script>
<script>window.APP_CONFIG = ${JSON.stringify({ url, anon, otpLen })};</script>
</head>
<body>
`;

mkdirSync('dist', { recursive: true });
writeFileSync('dist/index.html', head + app + '\n</body>\n</html>\n');
if (existsSync('web/manifest.webmanifest')) copyFileSync('web/manifest.webmanifest', 'dist/manifest.webmanifest');
if (existsSync('web/icons')) cpSync('web/icons', 'dist/icons', { recursive: true }); // ícones gerados do logo (assets/logo_octave.png)
console.log('dist/index.html pronto');
