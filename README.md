# Frontend
# 3º Semestre de Engenharia de Software

Repositório de atividades do 3º semestre com páginas estáticas (HTML/CSS) publicadas no GitHub Pages.

## Sumário
- [Acesso rápido (Deploy)](#acesso-rápido-deploy)
- [Site (GitHub Pages)](#site-github-pages)
- [Visão geral](#visão-geral)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Como executar localmente](#como-executar-localmente)
- [Tecnologias e dependências](#tecnologias-e-dependências)
- [Publicação (GitHub Pages)](#publicação-github-pages)

## Acesso rápido (Deploy)
- Site principal (hub): https://luiz192512.github.io/FrontEnd/
- Atividade 1 — Colecionador de relógios: https://luiz192512.github.io/FrontEnd/site-colecionador/
- Atividade 2 — Aprendizagem Java: https://luiz192512.github.io/FrontEnd/site-aprendizagem/
- Atividade 3 — Prática de CSS: https://luiz192512.github.io/FrontEnd/site-atividade-css/
- Atividade 4 — DaisyUI: https://luiz192512.github.io/FrontEnd/site-atividade-daisyui/

## Site (GitHub Pages)
O projeto está publicado via GitHub Pages.

Acesse o projeto em produção:
- https://luiz192512.github.io/FrontEnd/

## Visão geral
Este repositório funciona como um “hub” de atividades:
- A raiz contém uma página inicial (`index.html`) com cards que direcionam para cada atividade.
- Cada atividade fica isolada em sua própria pasta, com seu `index.html` e assets (CSS/imagens).

## Estrutura do repositório
### Raiz
- `index.html`: página inicial (hub) que lista e direciona para os sites/atividades.
- `README.md`: esta documentação.

### Atividades
- `site-colecionador/` (Atividade 1): página “Minha Coleção de Relógios”.
  - `index.html`: conteúdo do site.
  - `css/style.css`: estilos do site.
  - `img/`: imagens de relógios usadas no layout.

- `site-aprendizagem/` (Atividade 2): material de estudo digital (Java), com seções e navegação interna.
  - `index.html`: conteúdo do site.
  - `css/style.css`: estilos do site.

- `site-atividade-css/` (Atividade 3): página de prática com HTML/CSS (tema: curiosidades e fatos da Computação).
  - `index.html`: conteúdo do site.
  - `css/style.css`: estilos do site.

- `site-atividade-daisyui/` (Atividade 4): variação do site da Atividade 3 utilizando DaisyUI (via CDN).
  - `index.html`: conteúdo do site.

## Como executar localmente
### Requisitos
- Um navegador moderno (Chrome, Edge, Firefox, etc.).

### Execução
Como são páginas estáticas, você pode rodar de duas formas:

### Opção A — Abrir direto no navegador
1. Abra `index.html` na raiz.
2. Clique nos cards para navegar entre as atividades.

### Opção B — Servir via servidor local (recomendado)
Usar um servidor local evita algumas limitações comuns de acesso a arquivos e facilita testes.

Você pode usar, por exemplo:
- Extensão “Live Server” (VS Code), apontando para a raiz do projeto, ou
- Qualquer servidor HTTP simples da sua preferência.

## Tecnologias e dependências
- HTML5 e CSS3.
- DaisyUI (somente na Atividade 4) via CDN.
- Algumas páginas usam recursos externos (ex.: fontes/ícones via CDN); para carregar tudo corretamente, é necessário internet ao visualizar.

## Publicação (GitHub Pages)
O deploy é feito com GitHub Pages e aponta para a raiz do repositório (hub + pastas de atividades).

URL:
- https://luiz192512.github.io/FrontEnd/
