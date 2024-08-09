import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginVue from 'eslint-plugin-vue';
import autoImportJson from './.cache/auto-imports.json';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...autoImportJson.globals
            }
        }
    },
    pluginJs.configs.recommended,
    ...eslintPluginVue.configs['flat/recommended'],
    eslintPluginPrettierRecommended,
    {
        rules: {
            'no-prototype-builtins': 'off',
            'max-len': 'off',
            'no-unused-vars': 'off',
            'linebreak-style': ['error', 'unix']
        }
    }
];
