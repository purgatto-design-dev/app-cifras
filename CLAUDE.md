# Octave (nome provisório; antes "app de cifras")

> Brief deste app. As regras do Estúdio Apps (`../../CLAUDE.md`) e da casa valem aqui.
> Slug provisório `app-cifras`: troca quando o nome for criado (no Estúdio Marca).

- Telas e funções: @specs/app.md
- Decisões e histórico: @memoria.md

## Ideia
App moderno para músicos guardarem, criarem, estudarem e tocarem cifras.
- Importa cifra por **link** (ex.: Cifra Club) ou **colando o texto**: o app reconhece acordes, partes e
  tablaturas e mostra tudo no layout do app.
- Cria do zero: **cifra** (estilo brasileiro, acordes sobre a letra), **cifra + tablatura**, **tablatura**,
  **partitura** ou **folha em branco**.
- Na cifra: **troca de tom**/capotraste, **caneta** (dedo ou Apple Pencil), **borracha** e edição do texto.
- Organização em **pastas** (por gênero musical e livres), letras e cifras salvas.
- **Bandas:** o músico pede para entrar numa banda, o líder aprova, e ele passa a ver o repertório da banda.
- **Dois usos:** **estudo** (consultar e treinar sozinho) e **palco** (setlist ao vivo). No palco, quem é da
  banda escolhe entre editar **só a sua cifra** ou **a cifra da banda**, que atualiza em tempo real para
  todos depois de salvar.

**Para quem:** músicos brasileiros, de bandas de igreja, covers e autorais, que tocam com tablet ou celular no palco.

## Plataforma
Web instalável (PWA), **pensada primeiro para tablet** e funcionando no celular. Vira app de loja
depois, se precisar. O palco tem que funcionar **sem internet**. Stack aprovada: protótipo em HTML único,
depois Vite + React + Supabase.

## Primeira versão
Proposta (v1 = estudo solo): biblioteca e pastas, importar por colagem/link, cifra e tablatura do zero,
troca de tom, caneta/borracha, rolagem automática, modo palco solo offline.
Bandas e tempo real ficam na v2, e partitura na v3. O detalhe está em `specs/app.md`.

## Visual
Referências em `referencias/` (só inspiração, não entram no app).
- Fundo quase preto, ação em verde-limão `#D5FF40`, cinza `#C0C2B8`, branco `#FFFFFF`.
- Tipografia **Poppins** (Regular, SemiBold, Bold).
- Ícones de traço com cantos e pontas arredondados: **contorno** no uso geral, **preenchido** em botões e
  ações de destaque.
- Tema escuro favorece o palco. Os acordes em limão sobre o preto precisam passar no teste de leitura à distância.

## Etapa atual
Protótipo (3 de 4): v2 publicada (modos, quebra de linha, setlist pessoal, trava, diagramas, editor por toque).
Próximo: reação do Rafa e ajustes.
