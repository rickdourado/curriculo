# Patrick Dourado Ribeiro — Currículo Interativo & Landing Page Bilíngue

[![Website](https://img.shields.io/badge/GitHub%20Pages-rickdourado.github.io%2Fcurriculo-1f305e)](https://rickdourado.github.io/curriculo/)

Landing page interativa e currículo profissional bilíngue (**Português / Inglês**) de **Patrick Dourado Ribeiro** — **Doutor em Ciência da Informação (IBICT/UFRJ)**, **Arquivista Sênior (17 anos de experiência)** e **Desenvolvedor Python & Especialista em IA (6 anos de experiência)**.

## Lentes de Perfil Interativas & Suporte a Idiomas (PT / EN)

A interface conta com um seletor de idioma na TopBar (`PT` / `EN`) que altera dinamicamente todo o conteúdo (textos, títulos, estudos de caso, competências, histórico profissional e downloads de PDF) de forma instantânea e fluida, sem recarregar a página e preservando a animação da pintura *Starry Night*.

Além disso, a página suporta links diretos via parâmetros de URL, ideais para envio direcionado a recrutadores e avaliadores:

### Links Diretos por Idioma e Perfil:

- **Visão Unificada (Padrão):**
  - Português: [`https://rickdourado.github.io/curriculo/`](https://rickdourado.github.io/curriculo/)
  - English: [`https://rickdourado.github.io/curriculo/?lang=en`](https://rickdourado.github.io/curriculo/?lang=en)
- **Arquivista Sênior / Senior Archivist:**
  - Português: [`https://rickdourado.github.io/curriculo/?perfil=arquivista`](https://rickdourado.github.io/curriculo/?perfil=arquivista)
  - English: [`https://rickdourado.github.io/curriculo/?lang=en&perfil=arquivista`](https://rickdourado.github.io/curriculo/?lang=en&perfil=arquivista)
- **Desenvolvedor Python & IA / Python & AI Dev:**
  - Português: [`https://rickdourado.github.io/curriculo/?perfil=dev`](https://rickdourado.github.io/curriculo/?perfil=dev)
  - English: [`https://rickdourado.github.io/curriculo/?lang=en&perfil=dev`](https://rickdourado.github.io/curriculo/?lang=en&perfil=dev)

### Versões em PDF Geradas no Build:
- **Português:**
  - [`cv.pdf`](https://rickdourado.github.io/curriculo/cv.pdf) — Currículo Completo Unificado
  - [`cv-arquivista.pdf`](https://rickdourado.github.io/curriculo/cv-arquivista.pdf) — Foco Arquivista Sênior
  - [`cv-dev-python.pdf`](https://rickdourado.github.io/curriculo/cv-dev-python.pdf) — Foco Dev Python & IA
- **English:**
  - [`cv-en.pdf`](https://rickdourado.github.io/curriculo/cv-en.pdf) — Full Unified Resume
  - [`cv-arquivista-en.pdf`](https://rickdourado.github.io/curriculo/cv-arquivista-en.pdf) — Senior Archivist Resume
  - [`cv-dev-python-en.pdf`](https://rickdourado.github.io/curriculo/cv-dev-python-en.pdf) — Python & AI Dev Resume

## Stack

- **[Astro](https://astro.build)**: geração de HTML estático ultra-rápido com SEO otimizado.
- **Canvas 2D (`src/scripts/starry-night.js`)**: pintura viva *Starry Night* em JavaScript nativo com adaptação sutil de paleta por perfil.
- **Playwright (`scripts/snapshots.mjs`)**: renderiza automaticamente todos os 6 PDFs (PT e EN) e a imagem OpenGraph (`og.jpg`).
- **GitHub Actions + GitHub Pages**: deploy contínuo em cada push na branch `master`.
