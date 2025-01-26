import pluginSecurity from 'eslint-plugin-security';
import globals from 'globals';

import { defineConfig } from '../utils.js';
import jestConfig from './jest.js';
import perfectionistConfig from './perfectionist.js';
import rtlConfig from './rtl.js';
import typescriptConfig from './typescript.js';
import unicornConfig from './unicorn.js';

export default defineConfig(
  {
    ignores: [
      '.next',
      '.vercel',
      '.astro',
      'dist',
      'storybook-static',
      '.tsup',
      `**/${'node'}_modules`,
      '.cache',
      '**/.cache',
      '**/build',
      '**/dist',
      '**/bundled',
      '**/.storybook',
      '**/storybook-static',
      '**/vault',
      '**/_vault',
      '**/__*',
      '**/*.mdx',
      '**/index.ts',
    ],
  },

  ...typescriptConfig,
  ...jestConfig,
  ...rtlConfig,
  ...unicornConfig,
  ...perfectionistConfig,

  // Tailwind plugin
  // ...fixupConfigRules(compat.extends('plugin:tailwindcss/recommended')),

  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    // settings: {
    //   tailwindcss: {
    //     callees: ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
    //   },
    // },

    rules: {
      'no-empty': ['error', { allowEmptyCatch: true }],

      'no-restricted-imports': [
        'error',
        {
          paths: [
            // {
            //   message: 'Do not import from lucide-react. Use Icons instead.',
            //   name: 'lucide-react',
            // },
            {
              importNames: ['useEditorState'],
              message:
                'Do not import useEditorState. Use useEditorSelector instead.',
              name: '@udecode/plate-common',
            },
          ],
        },
      ],
    },
  },
  // Security
  pluginSecurity.configs.recommended,
  {
    rules: {
      'security/detect-non-literal-fs-filename': 'off',
      'security/detect-non-literal-regexp': 'off',
      'security/detect-object-injection': 'off',
      'security/detect-unsafe-regex': 'off',
    },
  }
);
