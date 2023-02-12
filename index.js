module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/react',
    'binary',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest-dom/recommended',
  ],
  plugins: ['prettier', 'testing-library', '@typescript-eslint'],
  ignorePatterns: ['**/dist/**/*.js', '**/lib/**/*.js'],
  globals: {
    dataLayer: true,
    texts_json: false,
  },
  env: {
    es6: true,
    browser: true,
    amd: true,
    jest: true,
    jquery: true,
    jasmine: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 8,
    babelOptions: {
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
      ],
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Restrict
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    indent: ['error', 4, { SwitchCase: 1 }],
    'key-spacing': ['error', { align: 'colon' }],
    'max-len': [
      'error',
      120,
      4,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
    ],
    'prefer-template': 'error',
    radix: ['error', 'as-needed'],
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
    'no-nested-ternary': 'error',
    curly: 'error',
    quotes: ['error', 'single'],
    'func-names': ['error', 'as-needed'],

    // Warning
    'no-nested-ternary': 'warn',
    'one-var': 'warn',
    'no-useless-escape': 'warn',
    'no-console': 'warn',
    'no-underscore-dangle': 'warn',

    // Allow
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
  },
};