module.exports = {

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

    root: true,

    plugins: ['prettier', 'testing-library', '@typescript-eslint'],

    parser: '@babel/eslint-parser',

    ignorePatterns: ['**/dist/**/*.js', '**/lib/**/*.js'],

    settings: {
        react: {
            version: '16',
        },
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
    },

    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 8,
        babelOptions: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
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

    extends: [
        'prettier',
        'prettier/react',
        'airbnb-base',
        'binary',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest-dom/recommended',
    ],

    overrides: [
        {
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            extends: ['plugin:testing-library/react'],
        },
        {
            files: ['*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
                'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
                'plugin:react/recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
            ],
            parserOptions: {
                ecmaversion: 2018,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                babelOptions: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript'],
                    plugins: [
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                        '@babel/plugin-proposal-export-default-from',
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-proposal-export-namespace-from',
                        '@babel/plugin-syntax-dynamic-import',
                        '@babel/plugin-proposal-optional-chaining',
                        '@babel/plugin-proposal-nullish-coalescing-operator',
                    ],
                },
            },
            settings: {
                react: {
                    version: 'detect',
                },
                'import/resolver': {
                    node: {
                        extensions: ['.ts', '.tsx'],
                        moduleDirectory: ['src', 'node_modules'],
                    },
                },
            },
        },
    ],

    rules: {
        camelcase: 0,
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
        'react/no-unknown-property': 1,
        'import/no-unresolved': [2, { ignore: ['@deriv/components', '@deriv/shared'] }],
        'react/prop-types': [
            1,
            {
                skipUndeclared: true,
            },
        ],
        'react/self-closing-comp': 'error',
    },


};
