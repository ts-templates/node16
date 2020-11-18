[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# @ts-examples/template

Template for TypeScript project

## Features

- [ESLint](https://eslint.org/) with [JavaScript Standard Style](https://standardjs.com/)
    - Run on pre-commit hook
    - Run on Pull request by GitHub Action
- Test by [Jest](https://jestjs.io/)
    - Run on Pull request by GitHub Action
- Manage Node.js version by [nvm](https://github.com/nvm-sh/nvm)
- Manage dependency updates by [Renovate](https://renovatebot.com/)

## Usage

1. [Create repository](https://github.com/ts-examples/template/generate) using template
2. Replace provisional string with actual string
    - `@ts-examples/template` => your package name
    - `Template for TypeScript project` => your package description
3. Implement `src/main.ts`
