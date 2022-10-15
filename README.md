[![build](https://github.com/ts-templates/node16/actions/workflows/build.yml/badge.svg)](https://github.com/ts-templates/node16/actions/workflows/build.yml)
[![lint](https://github.com/ts-templates/node16/actions/workflows/lint.yml/badge.svg)](https://github.com/ts-templates/node16/actions/workflows/lint.yml)
[![test](https://github.com/ts-templates/node16/actions/workflows/test.yml/badge.svg)](https://github.com/ts-templates/node16/actions/workflows/test.yml)

# @ts-templates/node16

Template for TypeScript project using Node.js v16

## Features

- [ESLint](https://eslint.org/) with [ESLint Recommended](https://github.com/eslint-recommended)
  - Run on Pull request by GitHub Actions
- Test by [Jest](https://jestjs.io/)
  - Run on Pull request by GitHub Actions
- Manage Node.js version by [nvm](https://github.com/nvm-sh/nvm)
- Manage dependency updates by [Renovate](https://renovatebot.com/)

## Usage

1. [Create repository](https://github.com/ts-templates/node16/generate) using template
2. Replace provisional string with actual string
    - `https://github.com/ts-templates/node16` => your repository URL
    - `@ts-templates/node16` => your package name
    - `Template for TypeScript project using Node.js v16` => your package description
3. Implement `src/main.ts`

## Scripts

```sh
# Compile TypeScript files to JavaScript files
npm run build

# Remove built files
npm run clean

# Run linters
npm run lint

# Run main.ts
npm start

# Run tests
npm test
```
