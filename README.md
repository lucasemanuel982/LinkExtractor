# LinkExtractor

A biblioteca LinkExtractor é uma ferramenta simples para ler arquivos e extrair links.

## 📋 Funcionalidades

- Extração de links de arquivos Markdown
- Validação de links HTTP/HTTPS
- Suporte para processamento de diretórios inteiros
- Interface de linha de comando (CLI) amigável
- Saída colorida no terminal

## 🚀 Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado (versão 14 ou superior).

```bash
# Clone o repositório
git clone https://github.com/alura-cursos/2708-node-lib-md.git

# Entre no diretório
cd 2708-node-lib-md

# Instale as dependências
npm install
```

## 💻 Como usar

### Via CLI

```bash
# Extrair links de um arquivo
npm run dev ./arquivos/texto.md

# Extrair links de um diretório
npm run dev ./arquivos/

# Validar links de um arquivo
npm run dev ./arquivos/texto.md valida

# Validar links de um diretório
npm run dev ./arquivos/ valida
```

### Via API

```javascript
import { extrairLinks } from './src/index.js';

// Extrair links de um arquivo
const links = await extrairLinks('./arquivos/texto.md');
console.log(links);
```

## 📦 Estrutura do Projeto

```
.
├── src/
│   ├── cli.js           # Interface de linha de comando
│   ├── index.js         # Funções principais
│   └── http-validacao.js # Validação de links
├── arquivos/            # Arquivos de exemplo
└── package.json
```
