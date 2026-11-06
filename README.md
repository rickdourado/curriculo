# Patrick Dourado Ribeiro — Currículo Interativo

[![Website](https://img.shields.io/badge/GitHub%20Pages-rickdourado.github.io%2Fcurriculo-1f305e)](https://rickdourado.github.io/curriculo/)

Landing page interativa e currículo de **Patrick Dourado Ribeiro** — **Doutor em Ciência da Informação (IBICT/UFRJ)**, **Arquivista Sênior (17 anos de experiência)** e **Desenvolvedor Python & Especialista em IA (6 anos de experiência)**.

## Lentes de Perfil Interativas

A página permite alternar de forma fluida entre três visões complementares (inclusive por parâmetros de URL para envio direto a recrutadores):

- **Visão Unificada (Padrão)**: `https://rickdourado.github.io/curriculo/` — Integra a trajetória completa em Ciência da Informação, Arquivologia e Engenharia de Software/IA.
- **Arquivista Sênior**: `https://rickdourado.github.io/curriculo/?perfil=arquivista` — Ênfase em Gestão Documental, Preservação Digital, RDC-Arq e grandes acervos (Petrobras, FIOCRUZ, IPHAN, UNESCO, Casa Civil-RJ, ANATEL, ECAD), apresentando Python e IA como diferencial competitivo.
- **Dev Python & IA**: `https://rickdourado.github.io/curriculo/?perfil=dev` — Ênfase em Desenvolvimento Python, FastAPI, Flask, LLMs, RAG, Agentes Autônomos e Visão Computacional, apresentando os 17 anos em Gestão Documental e Doutorado como diferencial de domínio de negócio (GovTech/LegalTech).

Cada perfil também conta com sua versão dedicada em PDF gerada automaticamente no build (`cv.pdf`, `cv-arquivista.pdf` e `cv-dev-python.pdf`).

## Stack

- **[Astro](https://astro.build)**: geração estática de alta performance.
- **Canvas 2D (`src/scripts/starry-night.js`)**: pintura animada *Starry Night* em JavaScript puro, com transições sutis de paleta conforme o perfil selecionado.
- **Playwright (`scripts/snapshots.mjs`)**: gera automaticamente os PDFs de cada perfil (`cv.pdf`, `cv-arquivista.pdf`, `cv-dev-python.pdf`) e a imagem OpenGraph (`og.jpg`).
- **GitHub Actions + GitHub Pages**: deploy automatizado a cada push na branch `master`/`main`.
