/**
 * Custom config base for projects using jest.
 *
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */
import { fixupConfigRules } from '@eslint/compat';

import { compat, defineConfig } from '../utils.js';

const jestPatterns = {
  files: ['**/?(*.)+(test|spec).{js,jsx,ts,tsx}'],
};

export default defineConfig(
  ...fixupConfigRules(compat.extends('plugin:jest/recommended')),
  ...fixupConfigRules(compat.extends('plugin:jest-formatting/recommended')),
  ...fixupConfigRules(compat.extends('plugin:jest-dom/recommended')),
  {
    files: jestPatterns.files,
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-object-literal-type-assertion': 'off',
      'import/default': 'off',
      // Relax rules that are known to be slow and less useful in a test context
      'import/namespace': 'off',
      'import/no-duplicates': 'off',
      // Relax rules that makes writing tests easier
      'import/no-named-as-default-member': 'off',
      'jest/consistent-test-it': ['error', { fn: 'it' }],
      'jest/no-duplicate-hooks': 'error',
      'jest/no-test-return-statement': 'error',
      'jest/prefer-hooks-in-order': 'error',
      'jest/prefer-hooks-on-top': 'error',
      'jest/prefer-strict-equal': 'off',
      'jest/prefer-to-have-length': 'error',
    },
  }
);
