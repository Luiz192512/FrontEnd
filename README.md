# FrontEnd

Repositório de atividades e experimentos do 3º semestre de Engenharia de Software. A raiz funciona como um hub principal, reunindo links para os projetos já navegáveis e registrando também as pastas auxiliares existentes na estrutura.

## Visão geral

O projeto está organizado como uma coleção de páginas estáticas e miniaplicações front-end:

- páginas em HTML e CSS puro;
- versões de uma mesma atividade usando CSS puro, DaisyUI e Bootstrap;
- projetos com JavaScript para interação, áudio e atualização dinâmica da interface;
- um hub principal na raiz para centralizar a navegação.

## Estrutura do repositório

```text
FrontEnd/
├── css/
│   └── style.css
├── index.html
├── README.md
├── site-aprendizagem/
├── site-atividade-css/
├── site-atividade-daisyui/
├── site-bichinho/
├── site-bootstrap/
├── site-caixa-livre/
├── site-colecionador/
├── site-css/
└── site-daisyui/
```

## Projetos disponíveis

### 1. site-colecionador
Galeria estática com uma coleção de relógios, imagens e organização visual simples.

- Arquivos principais:
  `site-colecionador/index.html`
  `site-colecionador/css/style.css`
  `site-colecionador/img/`

### 2. site-aprendizagem
Material de estudo digital com foco em Java, seções temáticas, navegação interna e formulário.

- Arquivos principais:
  `site-aprendizagem/index.html`
  `site-aprendizagem/css/style.css`

### 3. site-css
Versão em HTML + CSS puro da atividade "Arquivo Confuso da Computação", com CSS separado na pasta `css/` e sem uso de framework.

- Arquivos principais:
  `site-css/index.html`
  `site-css/css/style.css`

### 4. site-daisyui
Versão da atividade "Arquivo Confuso da Computação" usando DaisyUI via CDN.

- Arquivo principal:
  `site-daisyui/index.html`

### 5. site-bootstrap
Versão de referência da mesma atividade, desta vez usando Bootstrap.

- Arquivo principal:
  `site-bootstrap/index.html`

### 6. site-caixa-livre
Miniaplicação com JavaScript para simular um caixa, adicionar produtos, calcular total e tocar efeitos sonoros.

- Arquivos principais:
  `site-caixa-livre/index.html`
  `site-caixa-livre/js/scrypt.js`
  `site-caixa-livre/fx/`

### 7. site-bichinho
Projeto interativo de bichinho virtual no estilo Tamagotchi, com estados visuais, contagem de tempo, reinício e easter egg com áudio.

- Arquivos principais:
  `site-bichinho/index.html`
  `site-bichinho/css/style.css`
  `site-bichinho/js/script.js`
  `site-bichinho/img/`
  `site-bichinho/audio/`

## Pastas auxiliares registradas na estrutura

Estas pastas também fazem parte do repositório e aparecem no hub principal como parte da organização geral:

### site-atividade-css
- Pasta auxiliar registrada separadamente do projeto principal `site-css`.
- No workspace atual, foi detectada com a pasta `css/`.

### site-atividade-daisyui
- Pasta auxiliar registrada separadamente do projeto principal `site-daisyui`.
- No workspace atual, foi detectada sem arquivos navegáveis.

## Hub principal

O arquivo `index.html` na raiz foi reformulado para:

- exibir todos os projetos atualmente navegáveis;
- incluir cards informativos para as pastas auxiliares registradas na estrutura;
- melhorar a leitura visual do repositório;
- usar links relativos, funcionando melhor tanto localmente quanto no GitHub Pages;
- separar os estilos do hub em `css/style.css`.

## Como executar localmente

Como o repositório é formado por páginas estáticas, você pode abrir de duas formas:

### Opção 1. Abrir direto no navegador
1. Abra `index.html` na raiz.
2. Navegue pelos cards do hub principal.

### Opção 2. Usar um servidor local
Recomendado para evitar limitações de arquivos locais e testar melhor os recursos do navegador.

Você pode usar:

- Live Server no VS Code;
- qualquer servidor HTTP simples apontando para a raiz do projeto.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap via CDN
- DaisyUI via CDN
- Google Fonts no hub principal

## Relação entre os projetos

As pastas `site-css`, `site-daisyui` e `site-bootstrap` representam a mesma atividade-base em três abordagens diferentes:

- `site-css`: versão sem framework;
- `site-daisyui`: versão com DaisyUI;
- `site-bootstrap`: versão com Bootstrap.

## Publicação

O repositório foi pensado para publicação no GitHub Pages a partir da raiz.

Links esperados:

- Hub principal:
  `https://luiz192512.github.io/FrontEnd/`
- Colecionador:
  `https://luiz192512.github.io/FrontEnd/site-colecionador/`
- Aprendizagem Java:
  `https://luiz192512.github.io/FrontEnd/site-aprendizagem/`
- Arquivo Confuso em CSS:
  `https://luiz192512.github.io/FrontEnd/site-css/`
- Arquivo Confuso com DaisyUI:
  `https://luiz192512.github.io/FrontEnd/site-daisyui/`
- Arquivo Confuso com Bootstrap:
  `https://luiz192512.github.io/FrontEnd/site-bootstrap/`
- Caixa Livre:
  `https://luiz192512.github.io/FrontEnd/site-caixa-livre/`
- Meu Tamagotchi Virtual:
  `https://luiz192512.github.io/FrontEnd/site-bichinho/`

## Observações

- O hub anterior não refletia toda a estrutura real do repositório.
- Havia projetos existentes sem card no hub principal.
- O CSS do hub principal agora está separado do HTML.
- O `README.md` agora documenta os projetos prontos e também as pastas auxiliares registradas na estrutura.
