module.exports = {
    root: true,
    extends: ['next/core-web-vitals'],
    plugins: ['unused-imports'],
    rules: {
        'no-console': 'warn',
        'no-irregular-whitespace': 'warn',
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': 'warn',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/interactive-supports-focus': 'warn',
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        '@next/next/no-img-element': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-no-target-blank': [
            'error',
            {
                allowReferrer: false
            }
        ],
        'no-empty-pattern': 'warn',
        'no-inner-declarations': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
}
