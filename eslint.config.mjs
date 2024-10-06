// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    {
        plugins: {
            "react-hooks": hooksPlugin,
            "react-refresh": reactRefresh,
        },
        rules:
        {
            ...hooksPlugin.configs.recommended.rules,
            "react-refresh/only-export-components": "warn",
        },
    },
];