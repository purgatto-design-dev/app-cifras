# Memória do projeto

## Decisões aprovadas
- 2026-11-12: projeto aberto com o slug provisório `app-cifras` (sem nome ainda).
- 2026-11-12: estrutura proposta registrada no brief e nas specs. O Rafa aprovou abrir o projeto com ela,
  mas os detalhes (itens ❓ nas specs) ainda não foram aprovados.
- 2026-11-12: **edição da versão da banda:** por padrão só o líder edita, e ele pode dar permissão a membros
  específicos (papel "editor").
- 2026-11-12: **tom × rabiscos:** cada tom guarda os próprios rabiscos e, ao trocar de tom, aparecem só os do tom
  atual. (Eu tinha recomendado manter os rabiscos iguais em todos os tons.) Adicionado um indicador de "há
  rabiscos em outro tom".
- 2026-11-12: **conflito:** trava ao editar a versão da banda ("Fulano está editando"), com expiração automática
  e destravamento pelo líder.
- 2026-11-12: **stack:** protótipo em HTML único → Vite + React PWA (offline) + Supabase para contas e tempo real.
- 2026-11-12: **plataformas:** o app tem que funcionar em celular, tablet e desktop. Os testes agora são no
  celular e no tablet (o Rafa está sem tablet no momento), e o desktop também precisa funcionar.
- 2026-11-12: **dois modos de uso** (substitui a barra única das specs): tela de escolha estudo/palco **toda vez
  que o app abre** (último modo destacado), troca também no Perfil. Barra do estudo: Biblioteca, Recentes, ＋,
  Minhas, Perfil. Barra do palco: Biblioteca, Recentes, ＋, Bandas, Palco, Perfil. O ＋ fica sempre na barra.
- 2026-11-12: **barra do palco sem Recentes** (substitui a anterior): Biblioteca, Bandas, ＋, Palco, Perfil.
  A faixa "Estudadas recentemente" continua na Biblioteca. Publicado no mesmo link.
- 2026-11-12: **revisão "como músico"** aprovada pelo Rafa ("pode ajustar tudo"), menos dois pontos que são decisões
  dele e ficaram como estão: a escolha do modo toda vez que o app abre e a aba Recentes no estudo.
  - A cifra **quebra linha** mantendo o acorde sobre a sílaba (nunca rola para o lado); só a tablatura rola no próprio bloco.
  - **Setlists pessoais** ("Só eu"): criar, adicionar músicas, reordenar, tom por música, apagar. O líder também edita
    os da banda. Dá para adicionar ao setlist direto da cifra.
  - No **modo palco**, toda música abre com cara de palco (tela cheia, letra maior, tela acesa), mesmo fora do setlist.
  - **Trava de tela** no palco: toques não fazem nada e o pedal continua funcionando; para destravar, segura 0,7 s.
  - **Rolagem pela duração da música** (±15 s, padrão 3:30, guardada por música) com **contagem 3-2-1**.
    Pedal/teclado: → / Page Down próxima, ← / Page Up anterior, ↓ ↑ viram a página, Espaço inicia ou pausa.
  - **Diagramas de acordes** (violão): formas abertas comuns + pestana com raiz na 6ª/5ª corda; consideram o capo.
    Tocar num acorde mostra o diagrama. Extensões (9, 6, baixo invertido) aparecem com a forma simplificada e um aviso.
  - **2 colunas** (telas de 900px ou mais) e **"Caber"** (procura o maior tamanho de letra em que a música inteira cabe).
  - **Editor por toque:** toca na sílaba e escolhe o acorde (ou digita). Abas Acordes · Texto · Prévia.
  - **Caneta × dedo:** ao detectar caneta (Apple Pencil), a caneta desenha e o dedo rola. Também tem chave no Perfil.
  - Botão **"Colar o que copiei"** no link e no texto, e a dica "Compartilhar → Copiar link".
  - **Busca pela letra**, mostrando o trecho encontrado. **Sustenido/bemol** no Perfil (automático, ♯, ♭).
  - Minhas ganhou uma explicação de que as importadas entram lá ao anotar ou editar.
- 2026-11-12: **login sem senha** (proposta minha, montada no protótipo v3 para o Rafa ver): Google, Apple ou código
  de 6 números por e-mail; primeiro acesso com nome e instrumento; "Experimentar sem conta"; sessão lembrada; sair
  no Perfil. Ordem: conta → escolha do modo → app. No protótipo é tudo simulado (nenhum e-mail sai, qualquer
  código entra). **Aprovado pelo Rafa em 2026-11-12.**
- 2026-11-12: **vários instrumentos:** o músico escolhe quantos quiser, no primeiro acesso e no Perfil
  (antes era um só; contas antigas do protótipo são convertidas sozinhas). O visual e os textos ficam como
  estavam: o Rafa pediu só a seleção múltipla, sem ✓ nos botões nem texto novo.
- 2026-11-12: **partitura no protótipo agora, no app continua na v3** (escolha do Rafa). Só **pauta simples** por
  enquanto (pauta + tablatura, pauta dupla de piano e bateria ficaram de fora). Referência: papel pautado com
  linhas de título e 10 pautas.
- 2026-11-12: **publicar como o outro app do Rafa: GitHub + Vercel + Supabase**, em duas etapas.
  Etapa 1 (para o ensaio): o protótipo atual na Vercel, com login real por código de e-mail e as cifras salvas
  na conta (tabela `user_data`, um JSON por conta, com RLS). Etapa 2: construção em Vite + React com a mesma
  Supabase e a mesma Vercel. **Projeto novo na Supabase** só para este app. Google/Apple ficam "em breve"
  na versão online. O link do claude.ai continua simulado.
- 2026-11-12: **Minhas** = tudo do usuário: criadas do zero, com texto editado ou com anotações.
- 2026-11-12: **Biblioteca** mostra "Estudadas recentemente" + músicas salvas. Filtros viram botões que abrem
  popup (o Rafa não gostou da faixa de filtros com rolagem lateral, que esconde opções).
- 2026-11-12: **visualizador:** ajustes (tom, capo, letra, rolagem, editar) num botão no canto inferior direito.
  Na edição, desfazer/refazer aparecem ao lado dele só depois de desenhar.

## Decisões rejeitadas

## Alterações realizadas
- 2026-11-12: projeto criado a partir do `_modelo/`. Referências visuais salvas em `referencias/`
  (estilo de ícones; cores, tipografia e design system).
- 2026-11-12: **protótipo v0** em `prototipo/index.html`, publicado em https://claude.ai/artifact/AGuujkoWLJkWPesqhpnR3E.
  Tem biblioteca com pastas e busca; importar por link (simulado) e por texto colado (reconhecimento real de acordes,
  partes e tabs); escrever do zero (cifra, cifra+tab, tablatura, folha em branco; partitura bloqueada até a v3);
  visualizador com tom, capo, tamanho da letra e rolagem automática; caneta, marca-texto, borracha (apaga o traço
  inteiro), mover, desfazer/refazer, editar texto; rabiscos guardados por tom, com aviso; bandas (convite, pedido,
  aprovar, chave de editor); setlists; modo palco (tela acesa, próxima música, pedal/setas, escolha "só pra mim /
  pra banda", trava "Bruno está editando", descartar). O tempo real é simulado com um aviso.
- 2026-11-12: **protótipo v1** publicado no mesmo link. Tela de escolha do modo; barras por modo; abas Recentes e
  Minhas; Biblioteca com recentes, filtros em popup (Pasta, Gênero, Tom) e ordenação; visualizador sem barra de
  ferramentas (tom no topo + botão de ajustes flutuante com popup); edição com faixa de ferramentas no topo e
  desfazer/refazer flutuantes; Perfil com troca de modo. **Link:** agora tenta ler a página de verdade (pega o
  `<pre>` com acordes, título no `<h1>`, artista no `<h2>`). Testado: o Cifra Club bloqueia (CORS), e o app mostra
  "Não deu para ler este link" com "Colar o texto" ou "Ver como ficaria". Numa página que permite, a leitura
  funcionou. Testado em 375px e 1280px, sem erros no console e sem rolagem lateral.
- 2026-11-12: **protótipo v4: partitura.** "Escrever do zero → Partitura" abre um papel claro com título,
  compositor, andamento e 10 pautas (mais pautas aparecem conforme escreve). Ajustes: clave de sol/fá, armadura
  (−7 a +7, com o nome do tom), compasso (2/4, 3/4, 4/4, 2/2, 6/8, 9/8, 12/8), andamento, tamanho.
  Ferramenta "notas": escolhe a figura (semibreve a semicolcheia), pausa, ponto, ♯ ♭ ♮ e toca na pauta: a nota cai
  na altura tocada, toca o som, e a barra de compasso entra sozinha (vermelha se o compasso passar do tempo).
  Tocar numa nota a seleciona: muda a figura ou o acidente, sobe ou desce, apaga. Desfazer/refazer de notas.
  "Ouvir" toca a partitura no andamento, respeitando a armadura. A caneta, o marca-texto e a borracha funcionam
  por cima. Desenho próprio em SVG, com os símbolos da fonte Noto Music (Google Fonts), sem biblioteca.
  Testado em 375px e 1280px, sem erros.
- Decisões de design do protótipo: cifra em fonte mono (JetBrains Mono) para o acorde ficar alinhado sobre a
  letra; Poppins na interface; acordes em limão; partes da música como etiquetas cinza `#C0C2B8`.

## Problemas encontrados
- 2026-11-12: na v2, a tela de estudo escondia a barra como se fosse o palco (`classList.toggle` recebia
  `undefined` e alternava em vez de desligar). Corrigido antes de publicar; testado em 375px e 1280px.

- 2026-11-12: **cifra colada do Cifra Club sem cor e sem troca de tom** (teste do Rafa). Causa: o site põe um
  caractere invisível (U+200B) no começo das linhas; na cópia ele vem junto e o app não reconhecia os acordes
  (numa cifra real: 7 de 41 linhas de acorde reconhecidas). Também linhas com anotações como "(passagem)".

## Soluções aplicadas
- 2026-11-12: limpeza do texto colado/importado/editado (tira caracteres invisíveis, troca espaços especiais e
  tabulação, ♯/♭ viram #/b) também na hora de mostrar. Linhas de acorde aceitam anotações entre parênteses e
  acordes entre parênteses de repetição. Cifras já salvas com o problema são consertadas sozinhas ao abrir o app.
  Testado com texto no formato do site: todos os acordes com cor e mudando de tom. Publicado (v4.1).
- 2026-11-12: **regra da posição** (ideia do Rafa: o que está acima da letra é acorde), com proteção para não
  transformar verso em acorde: a linha logo acima da letra vira linha de acordes quando tem espaços largos entre
  os itens (ou um item só) e pelo menos metade dos itens tem escrita de acorde. Acordes fora do padrão
  ("C9(11)", "Bb7M+5", "A/C#m") são reconhecidos e trocam a nota e o baixo ao mudar de tom; "2x", "Riff",
  "N.C." ficam em cinza no lugar. Testado: versos como "Amém", "Deus", "A paz do Senhor" continuam letra.
  Publicado (v4.2).

## Pendências
- **Nome do app:** criar no Estúdio Marca e depois trocar o slug.
- **Importação do Cifra Club:** letras têm direito autoral e os termos de uso do site provavelmente proíbem
  coleta automática. Consultar um advogado antes de lançar. Proposta: importação só para a biblioteca
  pessoal, com "colar texto" como caminho principal.
- Tempo de expiração da trava de edição (definir na v2).
- **Login de verdade:** Supabase Auth, com contas de desenvolvedor Google e Apple (o "Entrar com Apple" exige
  conta Apple Developer paga). Também faltam os textos de Termos de uso e Política de privacidade (LGPD).
- O que acontece com os dados de quem usou "sem conta" e depois cria conta: no protótipo continuam no aparelho;
  na construção, enviar para a conta nova.
- **Leitura de link de verdade:** precisa de um servidor do app (ex.: função no Supabase) que busca a página e
  extrai a cifra. O navegador sozinho é bloqueado pelos sites. Entra na construção, depois da consulta jurídica.

## Próximos passos
1. O Rafa testa o protótipo v2 (quebra de linha, setlist pessoal, trava, rolagem, diagramas, editor por toque)
   no celular e no desktop e dá a reação.
2. Ajustes do protótipo e depois as specs da construção em Vite + React.

## Limitações conhecidas do protótipo
- Os rabiscos ficam em coordenadas da página (escalam com a fonte). Agora que a cifra quebra linha, se a largura
  mudar (girar o tablet, abrir no celular), eles podem sair do lugar. Na versão real, prender cada rabisco à linha da cifra.
- Sem caneta detectada, o dedo continua desenhando com a ferramenta caneta e é preciso "Mover" para rolar.
  O "dedo rola, caneta desenha" só foi testado com eventos simulados: falta testar num iPad com Apple Pencil.
- Ler link de verdade e aparecer no "Compartilhar" do celular dependem da construção (servidor + app instalado).
- Diagramas só de violão/guitarra e com uma forma por acorde.
- Partitura: as notas só entram no fim (não dá para inserir no meio); sem ligaduras, quiálteras, colcheias
  agrupadas por barra (cada uma tem a própria bandeirola), letra embaixo da pauta nem mais de uma voz.
  O acidente vale só para a nota marcada (no papel, ele vale até o fim do compasso).
  Na construção (v3), avaliar uma biblioteca de notação (VexFlow, OpenSheetMusicDisplay ou abcjs).
- Dados ficam só no navegador (localStorage). Não há conta, sincronização nem tempo real de verdade.
