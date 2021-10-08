module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:lit/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    'lit/no-invalid-html': 'warn',
  },
};
