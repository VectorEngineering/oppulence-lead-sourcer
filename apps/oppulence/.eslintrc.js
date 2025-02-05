module.exports = {
    extends: ['../../.eslintrc.js'],
    rules: {
        // Suppress errors as warnings
        'no-console': 'warn',
        'no-irregular-whitespace': 'warn',
        'unused-imports/no-unused-vars': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/interactive-supports-focus': 'warn',
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        '@next/next/no-img-element': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'no-empty-pattern': 'warn',

        // Handle unused variables/imports
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_'
            }
        ],

        // Accessibility rules
        'jsx-a11y/no-autofocus': 'off', // If you need autofocus functionality

        // React specific rules
        'react/jsx-no-target-blank': [
            'error',
            {
                allowReferrer: false
            }
        ],

        // Allow certain inner declarations
        'no-inner-declarations': 'off',

        // Add any app-specific overrides here
    }
} 