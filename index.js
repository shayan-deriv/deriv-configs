module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest-dom/recommended',
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ['prettier', 'testing-library', '@typescript-eslint', 'jest'],
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
    node: true
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

  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {

    //------------------------------------rules from deriv-app------------------------------------
    camelcase: 0,
    // semi                                : ['error', 'always'],
    'array-callback-return': 0,
    'arrow-body-style': 0,
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    curly: 0,
    'eol-last': ['error', 'always'],
    'func-names': ['error', 'never'],
    'key-spacing': 0,
    'max-classes-per-file': ['warn', 2],
    'lines-between-class-members': 0,
    indent: 0,
    'no-console': 'error',
    'no-else-return': ['error', { allowElseIf: true }],
    'no-multi-assign': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-globals': 0,
    'no-script-url': 0,
    'one-var': ['error', { initialized: 'never', uninitialized: 'always' }],
    'prefer-destructuring': 0,
    quotes: 0,
    'space-infix-ops': 'error',
    'global-require': 'warn',

    // ------------------------------------rules from binary package------------------------------------
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
    // indent: ['error', 4, { SwitchCase: 1 }],
    // 'key-spacing': ['error', { align: 'colon' }],
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
    // 'no-nested-ternary': 'error',
    // curly: 'error',
    // quotes: ['error', 'single'],
    // 'func-names': ['error', 'as-needed'],

    // Warning
    'no-nested-ternary': 'warn',
    // 'one-var': 'warn',
    'no-useless-escape': 'warn',
    'no-underscore-dangle': 'warn',

    // Allow
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',

    // import rules
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/__tests__/**/*.js',
          '**/test*.js',
          '**/*.test.js*',
          '**/*.spec.js',
          '**/*.spec.jsx',
          '**/*.spec.ts',
          '**/*.test.ts',
          '**/*.spec.tsx',
          '**/*.test.tsx',
        ],
      },
    ],

    'import/no-useless-path-segments': 'error',
    'import/order': [
      0, // TODO: we should turn this to error after we sorted our import orders.
      {
        groups: [['builtin', 'external'], 'internal', 'sibling', 'parent'],
        'newlines-between': 'ignore',
      },
    ],
    'spaced-comment': 'off',
    'import/prefer-default-export': 0,
    'import/extensions': [0, { jsx: 'always', json: 'always' }],
    'no-sequences': ['warn'],
    'import/no-unresolved': [2, { ignore: ['@deriv/components', '@deriv/shared'] }],
    'react/prop-types': [
      1,
      {
        skipUndeclared: true,
      },
    ],
    'react/self-closing-comp': 'error',

    // deriv-com
    "strict": 0,
    // "no-console": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // "no-trailing-spaces": [
    //   "error",
    //   {
    //     "skipBlankLines": true
    //   }
    // ],
    "no-unused-vars": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1
      }
    ],


    "space-unary-ops": "error",
    // "import/no-extraneous-dependencies": [
    //     0,
    //     {
    //         "extensions": [".jsx"]
    //     }
    // ],


    // "import/order": [
    //   "error",
    //   {
    //     "groups": ["builtin", "external", "parent", "sibling", "index"],
    //     "newlines-between": "never"
    //   }
    // ],
    // "react/sort-prop-types": [
    //   "error",
    //   {
    //     "ignoreCase": true,
    //     "sortShapeProp": true
    //   }
    // ],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    // "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    // "jest/valid-expect": "error",
    "react/react-in-jsx-scope": "off",

    //TODO: I'm disabling this rules for now but later we need to fix the code
    "jest/valid-expect": "off",
    "no-trailing-spaces": "off",
    "jest/no-identical-title": "off",


    // these are rules that made deriv-com tests fail
    "no-shadow": "off",
    "eqeqeq": "off",
    "consistent-return": "off",
    'no-unused-expressions': 'off',
  },
};