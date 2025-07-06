# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# DESAFIO: Github API
#### Forma de entrega: link do projeto no seu Github

Você deverá entregar um projeto ReactJS conforme design Figma abaixo. Veja o vídeo explicativo para mais
detalhes sobre o que deve ser feito.

<https://www.figma.com/file/igQqM14f9sP17jyo54Y8vL/DesafioGithubAPI>

Seu projeto deve ser criado usando o Vite.

-----------------------------------------
Nota: o endereço da API do Github é este (troque o nome do usuário por outro):

<https://api.github.com/users/acenelio>

-----------------------------------------

## Critérios de correção

Todos critérios a seguir devem ser contemplados:

1) Duas páginas com rotas funcionando, navegando entre elas. 
2) Quando buscar um usuário que existe, os dados do usuário devem aparecer conforme layout
3) Quando buscar um usuário que não existe, deve aparecer uma mensagem conforme layout

Opcional: deixe seu layout responsivo.


