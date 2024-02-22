module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect' 
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'React' }]
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking', 
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json' 
  },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
