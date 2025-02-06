import type { Config } from 'tailwindcss'
import sharedConfig from '@dub/tailwind-config/tailwind.config'

const config: Pick<Config, 'presets'> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './ui/**/*.{js,ts,jsx,tsx}',
        // h/t to https://www.willliu.com/blog/Why-your-Tailwind-styles-aren-t-working-in-your-Turborepo
        '../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}',
        '../../packages/blocks/src/**/*{.js,.ts,.jsx,.tsx}',
      ],
      theme: {
        extend: {
          ...sharedConfig?.theme?.extend,
          colors: {
            ...sharedConfig?.theme?.extend?.colors,
            // Enhanced semantic color system
            surface: {
              DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
              elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
              lowered: 'rgb(var(--surface-lowered) / <alpha-value>)',
            },
            content: {
              DEFAULT: 'rgb(var(--content) / <alpha-value>)',
              subtle: 'rgb(var(--content-subtle) / <alpha-value>)',
              muted: 'rgb(var(--content-muted) / <alpha-value>)',
            },
            accent: {
              DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
              subtle: 'rgb(var(--accent-subtle) / <alpha-value>)',
              muted: 'rgb(var(--accent-muted) / <alpha-value>)',
            },
          },
          typography: {
            DEFAULT: {
              css: {
                maxWidth: '65ch',
                color: 'rgb(var(--content))',
                lineHeight: '1.75',
                a: {
                  color: 'rgb(var(--accent))',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                },
              },
            },
          },
          animation: {
            ...sharedConfig?.theme?.extend?.animation,
            'infinite-scroll': 'infinite-scroll 22s linear infinite',
            'infinite-scroll-y': 'infinite-scroll-y 22s linear infinite',
            'text-appear': 'text-appear 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
            'table-pinned-shadow': 'table-pinned-shadow cubic-bezier(0, 0, 1, 0)',
            'caret-blink': 'caret-blink 1s ease-out infinite',
            'pulse-scale': 'pulse-scale 6s ease-out infinite',
            'gradient-move': 'gradient-move 5s linear infinite',
            float: 'float 6s ease-in-out infinite',
            'slide-up': 'slide-up 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            'slide-down': 'slide-down 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            'fade-in': 'fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            'fade-out': 'fade-out 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            'spin-slow': 'spin 4s linear infinite',
          },
          keyframes: {
            ...sharedConfig?.theme?.extend?.keyframes,
            'infinite-scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(var(--scroll, -150%))' },
            },
            'infinite-scroll-y': {
              '0%': { transform: 'translateY(0)' },
              '100%': { transform: 'translateY(var(--scroll, -150%))' },
            },
            'text-appear': {
              '0%': {
                opacity: '0',
                transform: 'rotateX(45deg) scale(0.95)',
              },
              '100%': {
                opacity: '1',
                transform: 'rotateX(0deg) scale(1)',
              },
            },
            float: {
              '0%, 100%': {
                transform: 'translateY(0)',
              },
              '50%': {
                transform: 'translateY(-10px)',
              },
            },
            'slide-up': {
              '0%': {
                transform: 'translateY(10px)',
                opacity: '0',
              },
              '100%': {
                transform: 'translateY(0)',
                opacity: '1',
              },
            },
            'slide-down': {
              '0%': {
                transform: 'translateY(-10px)',
                opacity: '0',
              },
              '100%': {
                transform: 'translateY(0)',
                opacity: '1',
              },
            },
            'fade-in': {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            'fade-out': {
              '0%': { opacity: '1' },
              '100%': { opacity: '0' },
            },
          },
          // Enhanced backdrop blur utilities
          backdropBlur: {
            xs: '2px',
            sm: '4px',
            md: '8px',
            lg: '12px',
            xl: '16px',
            '2xl': '24px',
          },
          // Modern box shadow system
          boxShadow: {
            subtle: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            elevated: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            prominent: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            floating: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          },
          // Enhanced border radius
          borderRadius: {
            '4xl': '2rem',
            '5xl': '2.5rem',
            '6xl': '3rem',
          },
          // Glass effect utilities
          backdropFilter: {
            none: 'none',
            glass: 'blur(16px) saturate(180%)',
          },
          // Gradient utilities
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            'gradient-subtle': 'linear-gradient(to right, var(--tw-gradient-stops))',
          },
          // Enhanced spacing scale
          spacing: {
            '4.5': '1.125rem',
            '5.5': '1.375rem',
            '6.5': '1.625rem',
            '7.5': '1.875rem',
            '8.5': '2.125rem',
            '9.5': '2.375rem',
          },
        },
      },
    },
  ],
}

export default config
