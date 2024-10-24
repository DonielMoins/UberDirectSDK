import typescriptEslint from '@typescript-eslint/eslint-plugin'
import eslintRecommended from '@eslint/js'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'

export default [
    {
        plugins: {
            '@typescript-eslint': typescriptEslint,
            'eslint:recommended': eslintRecommended.configs.recommended,
        },

        languageOptions: {
            globals: {
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },

        rules: {
            indent: ['error', 4],
            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            semi: ['error', 'never'],
            'space-before-blocks': 'error',
            'object-curly-newline': 'error',
            'object-curly-spacing': ['error', 'always'],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            // 'no-undef': 'warn'
        },
        ignores: ['**/*.test.ts', 'node_modules', 'dist/*'],
    },
]