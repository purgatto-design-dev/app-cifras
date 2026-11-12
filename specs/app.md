# Specs do app

> Status: as regras abertas foram decididas em 2026-11-12 (ver `memoria.md`). Próximo passo: protótipo.

## Entrada: conta (sem senha) — aprovado em 2026-11-12
1. **Entrar:** Continuar com Google · Continuar com Apple · ou e-mail → código de 6 números (vale 10 min).
   Código e não link mágico: no app instalado, o link abriria o navegador e a pessoa sairia do app.
   O campo do código aceita o preenchimento automático do celular e entra sozinho ao completar os 6 números.
2. **Primeiro acesso:** nome ("Como te chamam?") e instrumentos (quantos quiser; dá para mudar no Perfil).
3. **Experimentar sem conta:** os dados ficam só no aparelho; bandas pedem conta. No Perfil: "Criar conta ou entrar".
4. Sessão lembrada: nas próximas aberturas o app vai direto para a escolha do modo. Perfil tem "Sair da conta".
Construção: Supabase Auth (OAuth Google/Apple + OTP por e-mail). Termos de uso e privacidade: a definir.

## Entrada: escolha do modo
Toda vez que o app abre, aparece a tela **"Como você vai tocar hoje?"** com duas opções: **Modo estudo** e
**Modo palco**. O último modo usado fica destacado. Também dá para trocar de modo no **Perfil**. (Decidido em 2026-11-12.)

## Navegação (barra inferior, muda com o modo)
| Modo estudo | Modo palco |
|---|---|
| Biblioteca · Recentes · **＋** · Minhas · Perfil | Biblioteca · Bandas · **＋** · Palco · Perfil |

| Área | Para quê |
|---|---|
| **Biblioteca** | Faixa "Estudadas recentemente" e a lista de músicas salvas. Busca e filtros (Pasta, Gênero, Tom) em botões que abrem um popup, e a ordenação ao lado da lista. |
| **Recentes** (estudo) | Músicas abertas por último, da mais nova para a mais antiga, com o horário. No palco, fica só a faixa de recentes da Biblioteca. |
| **Minhas** (estudo) | Tudo o que é do usuário: criadas do zero, com o texto editado ou com anotações de caneta. |
| **＋ Criar** | Sempre na barra, na 3ª posição nos dois modos: importar por link, colar texto ou escrever do zero. |
| **Bandas** (palco) | Bandas em que o usuário está: repertório, membros, pedidos de entrada. |
| **Palco** (palco) | Setlists (repertório do show na ordem) e a entrada no modo palco. |
| **Perfil** | Conta, instrumento, **modo de uso (estudo/palco)**, preferências (sustenido/bemol, "só a caneta desenha", tela acesa, pedal). |

## Telas
0. **Escolha do modo:** estudo ou palco, sempre que o app abre.
1. **Biblioteca:** estudadas recentemente + músicas salvas, busca, filtros em popup (pasta, gênero, tom), ordenação.
1b. **Recentes** e **Minhas** (ver a navegação).
2. **Pasta:** músicas da pasta. As pastas por gênero são sugeridas automaticamente, e as livres o usuário cria.
3. **Criar / importar:** escolha da origem (link, colar texto, do zero) e do formato.
4. **Prévia da importação:** cifra já no layout do app, com campos para conferir título, artista, tom, capo e gênero.
5. **Editor do zero:** cifra (acordes sobre a letra) · cifra + tablatura · tablatura · partitura (v3) · folha em branco.
   Abas **Acordes** (toca na sílaba e escolhe o acorde), **Texto** (escrever a letra) e **Prévia**.
   **Partitura** (já no protótipo; no app, v3): papel de pauta simples com título e compositor; clave, armadura,
   compasso e andamento nos ajustes; ferramenta de notas (figura, pausa, ponto, acidentes; tocar na pauta põe a
   nota na altura tocada); ouvir; caneta por cima para desenhar à mão.
6. **Visualizador da cifra:** a cifra ocupa a tela e **quebra linha** mantendo cada acorde sobre a sílaba (nunca
   rola para o lado; só a tablatura rola no próprio bloco). Um **botão de ajustes no canto inferior direito** abre
   um popup com tom ±, capo, tamanho da letra + "Caber na tela", colunas (1/2, em telas largas), rolagem pela
   duração da música (com contagem 3-2-1), diagramas dos acordes, adicionar ao setlist, pasta e Editar
   (depois: BPM/metrônomo). O tom atual também aparece no topo, e um toque nele abre o mesmo popup.
   Tocar num acorde mostra o diagrama dele.
7. **Modo edição** (sobre o visualizador): no topo, a camada ("Só pra mim"/"Banda"), editar texto e Concluir.
   Logo abaixo, uma faixa com mover, caneta, marca-texto, borracha e as cores. **Desfazer e refazer aparecem no
   canto inferior direito, ao lado do botão de ajustes, só depois que algo é desenhado.**
8. **Bandas:** lista das bandas, opções de criar banda e entrar com código.
9. **Banda:** repertório, setlists, membros, pedidos pendentes (líder).
10. **Setlist:** ordem das músicas, com o tom definido para cada uma no show. Há setlists **pessoais** ("Só eu",
    para quem toca sozinho) e **da banda** (o líder edita). Criar, adicionar músicas, reordenar, mudar o tom, apagar.
11. **Modo palco:** tela cheia, escuro, tela sempre acesa, música atual e a próxima, avanço com toque ou pedal,
    **trava de tela** (destrava segurando). No modo palco, uma música aberta pela biblioteca também abre assim.
    Pedal/teclado: → / Page Down próxima, ← / Page Up anterior, ↓ ↑ viram a página, Espaço inicia ou pausa a rolagem.
12. **Perfil e preferências.**

Toda tela que depende de dados tem os estados carregando, vazio e erro.

## Fluxos principais

### Adicionar música
`＋` → origem:
- **Link:** a URL é lida, aparece a prévia, o usuário confere e salva. Se falhar, o app oferece "colar o texto".
  A leitura precisa de um servidor do app (ex.: função no Supabase), porque o navegador não consegue ler sites
  de cifra direto (eles bloqueiam). Ver a pendência jurídica na memória.
- **Colar texto:** o app reconhece acordes, partes (Intro, Refrão…) e tabs, mostra a prévia e o usuário salva.
- **Do zero:** escolhe o formato e o editor abre.

Depois: tom original, capo, gênero (pasta sugerida) e, opcionalmente, "adicionar à banda X".

### Estudar
Biblioteca → música → visualizador → ajusta tom e rolagem → (opcional) Editar → caneta/borracha/texto → salvar.

### Banda
- **Criar:** nome da banda, e o app gera um código/link de convite. Quem cria é o líder.
- **Entrar:** o usuário informa o código e o pedido fica pendente até o líder aprovar. Aprovado, ele vê o repertório.
- Papéis: **líder** (aprova membros, monta setlists, edita a versão da banda), **editor** (membro a quem o
  líder deu permissão de editar a versão da banda, ex.: o diretor musical) e **membro**.
- Por padrão só o líder edita a versão da banda. Os membros comuns anotam apenas na própria camada pessoal.

### Palco
Palco → setlist → modo palco → toque/pedal passa para a próxima música → Editar →
- **Só pra mim:** grava na camada pessoal e ninguém mais vê.
- **Pra banda toda** (só líder e editores): trava a versão da banda, grava e, ao salvar, destrava e atualiza em
  tempo real para todos.

## Regras de comportamento
- **Camadas da cifra:** base (texto) → camada da banda → camada pessoal (anotações). Uma camada nunca apaga a outra.
- **Troca de tom × rabiscos:** cada tom guarda os próprios rabiscos. Ao trocar de tom, somem os rabiscos do tom
  anterior e aparecem só os feitos no tom atual. Voltando ao tom anterior, eles reaparecem. A troca de tom altera os
  acordes digitados normalmente. Os rabiscos ficam presos à linha/trecho em que foram feitos.
  O tom na tela deve indicar quando há rabiscos guardados em outro tom (ex.: um ponto no seletor de tom),
  para ninguém achar que as anotações sumiram.
- **Offline no palco:** a setlist é baixada antes. Edições feitas sem rede sincronizam quando a conexão voltar.
- **Conflito na versão da banda: trava ao editar.** Quando alguém começa a editar a versão da banda de uma
  música, ela fica travada para os outros, que veem "Fulano está editando". Ao salvar ou cancelar, destrava.
  A trava expira sozinha se a pessoa ficar sem conexão ou inativa (tempo a definir no protótipo da v2), e o
  líder pode destravar manualmente. Editar sem internet só é possível na camada pessoal.
- **Importação:** o conteúdo importado fica só na biblioteca de quem importou (ou da banda dele), e o app
  nunca monta um catálogo público. Ver "Pendências" na memória (direito autoral e termos de uso).

## Dados
- **Usuário:** nome, instrumentos (lista, um ou vários), e-mail/método de entrada, preferências.
- **Música:** título, artista, gênero, tom original, capo, BPM, formato, conteúdo (texto estruturado:
  partes, linhas, acordes, tabs), origem (link/colado/autoral).
- **Pasta:** nome, tipo (gênero/livre), músicas.
- **Anotação:** traços da caneta (vetor), camada (pessoal/banda), música, **tom em que foi feita**,
  âncora (linha/trecho), autor.
- **Banda:** nome, código de convite, membros e papéis (líder/editor/membro), pedidos pendentes, repertório.
- **Trava de edição:** música, quem está editando, desde quando.
- **Setlist:** banda, data, músicas na ordem, tom de cada uma no show.

Fica guardado na nuvem (contas, bandas, sincronização) com uma cópia local no aparelho (offline).

## Versões
- **v1 (estudo solo):** biblioteca e pastas, importação por colagem/link, cifra e tablatura do zero,
  troca de tom, caneta/borracha, rolagem automática, modo palco solo offline.
- **v2 (banda):** bandas, convites, setlists, versão da banda em tempo real.
- **v3:** partitura, pedal Bluetooth, exportar PDF, "líder controla a música da vez" para todos.

## Stack
Aprovada em 2026-11-12:
- **Protótipo:** HTML único, para validar o visualizador, a troca de tom e a caneta no tablet.
- **Construção:** Vite + React como PWA (instalável e offline). Contas e tempo real com um backend como Supabase.
- Partitura (v3): avaliar uma biblioteca de notação (ex.: VexFlow, OpenSheetMusicDisplay, abcjs).
- Nenhuma dependência é instalada sem autorização.
