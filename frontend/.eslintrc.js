module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'jsx-a11y/no-onchange': 0,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/interactive-supports-focus': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-shadow': 2,
    'react/prop-types': 0,
    'no-shadow': 0,
    'sort-imports': 0,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-unknown-property': [2, { ignore: ['class', 'for'] }],
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-curly-spacing': ['error'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off', // https://en.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
  },
  ignorePatterns: ['.eslintrc.js', '.prettierrc.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
