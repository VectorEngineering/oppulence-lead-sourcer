import sharedConfig from "@dub/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      darkMode: ["class"],
      ...sharedConfig,
      content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
      ],
      prefix: "",
      theme: {
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "6rem",
          },
          screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1400px",
          },
        },
        extend: {
          ...sharedConfig?.theme?.extend,
          colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
              DEFAULT: "hsl(var(--secondary))",
              foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
              DEFAULT: "hsl(var(--destructive))",
              foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
              DEFAULT: "hsl(var(--muted))",
              foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
              DEFAULT: "hsl(var(--accent))",
              foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
              DEFAULT: "hsl(var(--popover))",
              foreground: "hsl(var(--popover-foreground))",
            },
            card: {
              DEFAULT: "hsl(var(--card))",
              foreground: "hsl(var(--card-foreground))",
            },
            sidebar: {
              DEFAULT: "hsl(var(--sidebar-background))",
              foreground: "hsl(var(--sidebar-foreground))",
              primary: "hsl(var(--sidebar-primary))",
              accent: "hsl(var(--sidebar-accent))",
              "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
              border: "hsl(var(--sidebar-border))",
              ring: "hsl(var(--sidebar-ring))",
              "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
            },
          },
          spacing: {
            // Modern spacing scale
            "4xs": "0.125rem", // 2px
            "3xs": "0.25rem", // 4px
            "2xs": "0.375rem", // 6px
            xs: "0.5rem", // 8px
            sm: "0.75rem", // 12px
            md: "1rem", // 16px
            lg: "1.25rem", // 20px
            xl: "1.5rem", // 24px
            "2xl": "2rem", // 32px
            "3xl": "2.5rem", // 40px
            "4xl": "3rem", // 48px
          },
          borderRadius: {
            // Modern border radius scale
            none: "0",
            sm: "0.25rem", // 4px
            md: "0.375rem", // 6px
            lg: "0.5rem", // 8px
            xl: "0.75rem", // 12px
            "2xl": "1rem", // 16px
            pill: "9999px",
          },
          backdropBlur: {
            none: "0",
            sm: "4px",
            md: "8px",
            lg: "12px",
            xl: "16px",
            "2xl": "24px",
            "3xl": "32px",
          },
          keyframes: {
            ...sharedConfig?.theme?.extend?.keyframes,
            // Infinite scroll animation
            "infinite-scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(var(--scroll, -150%))" },
            },
            "infinite-scroll-y": {
              "0%": { transform: "translateY(0)" },
              "100%": { transform: "translateY(var(--scroll, -150%))" },
            },
            // Text appear animation
            "text-appear": {
              "0%": {
                opacity: "0",
                transform: "rotateX(45deg) scale(0.95)",
              },
              "100%": {
                opacity: "1",
                transform: "rotateX(0deg) scale(1)",
              },
            },
            // Table pinned column shadow animation
            "table-pinned-shadow": {
              "0%": { filter: "drop-shadow(rgba(0, 0, 0, 0.1) -2px 10px 6px)" },
              "100%": { filter: "drop-shadow(rgba(0, 0, 0, 0) -2px 10px 6px)" },
            },
            // OTP caret blink animation
            "caret-blink": {
              "0%,70%,100%": { opacity: "0" },
              "20%,50%": { opacity: "1" },
            },
            // Pulse scale animation used for onboarding/welcome
            "pulse-scale": {
              "0%": { transform: "scale(0.8)", opacity: "0" },
              "30%": { opacity: "1" },
              "100%": { transform: "scale(2)", opacity: "0" },
            },
            // Gradient move animation for gradient text
            "gradient-move": {
              "0%": { backgroundPosition: "0% 50%" },
              "100%": { backgroundPosition: "200% 50%" },
            },
            "accordion-down": {
              from: {
                height: "0",
              },
              to: {
                height: "var(--radix-accordion-content-height)",
              },
            },
            "accordion-up": {
              from: {
                height: "var(--radix-accordion-content-height)",
              },
              to: {
                height: "0",
              },
            },
            "fade-in": {
              "0%": { opacity: "0", transform: "translateY(10px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
            // Modern hover effect
            "hover-lift": {
              "0%": { transform: "translateY(0) scale(1)" },
              "100%": { transform: "translateY(-5px) scale(1.02)" },
            },
            // Subtle pulse animation
            "subtle-pulse": {
              "0%, 100%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.01)" },
            },
            // Smooth slide transitions
            "slide-in": {
              "0%": { transform: "translateX(-100%)" },
              "100%": { transform: "translateX(0)" },
            },
            "slide-out": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(100%)" },
            },
            // Modern text reveal
            "text-reveal": {
              "0%": {
                transform: "translateY(100%)",
                opacity: "0",
              },
              "100%": {
                transform: "translateY(0)",
                opacity: "1",
              },
            },
            float: {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-5px)" },
            },
            scale: {
              "0%, 100%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.02)" },
            },
            ripple: {
              "0%": { transform: "scale(0)", opacity: "0.4" },
              "100%": { transform: "scale(4)", opacity: "0" },
            },
            morph: {
              "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
              "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
              "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
            },
            // Smooth transitions
            "fade-up": {
              "0%": { opacity: "0", transform: "translateY(10px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
            "fade-down": {
              "0%": { opacity: "0", transform: "translateY(-10px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
          },
          boxShadow: {
            subtle: "0 2px 10px rgba(0, 0, 0, 0.05)",
            elevation: "0 4px 20px rgba(0, 0, 0, 0.08)",
            float: "0 8px 30px rgba(0, 0, 0, 0.12)",
            sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            md: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
            lg: "0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
            xl: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
            inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
            soft: "0 2px 15px rgb(0 0 0 / 0.03)",
            glow: "0 0 15px rgb(var(--primary) / 0.15)",
            "glow-strong": "0 0 30px rgb(var(--primary) / 0.25)",
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            ...sharedConfig?.theme?.extend?.animation,
            // Infinite scroll animation
            "infinite-scroll": "infinite-scroll 22s linear infinite",
            "infinite-scroll-y": "infinite-scroll-y 22s linear infinite",
            // Text appear animation
            "text-appear": "text-appear 0.15s ease",
            // Table pinned column shadow animation
            "table-pinned-shadow":
              "table-pinned-shadow cubic-bezier(0, 0, 1, 0)",
            // OTP caret blink animation
            "caret-blink": "caret-blink 1s ease-out infinite",
            // Pulse scale animation used for onboarding/welcome
            "pulse-scale": "pulse-scale 6s ease-out infinite",
            "gradient-move": "gradient-move 5s linear infinite",
            "fade-in": "fade-in 0.5s ease-out",
            "hover-lift": "hover-lift 0.3s ease-out forwards",
            "subtle-pulse": "subtle-pulse 2s ease-in-out infinite",
            "slide-in": "slide-in 0.5s ease-out",
            "slide-out": "slide-out 0.5s ease-out",
            "text-reveal": "text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            float: "float 3s ease-in-out infinite",
            scale: "scale 3s ease-in-out infinite",
            ripple: "ripple 0.6s linear forwards",
            morph: "morph 8s ease-in-out infinite",
            "fade-up": "fade-up 0.5s ease-out",
            "fade-down": "fade-down 0.5s ease-out",
          },
        },
      },
      plugins: [
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
        // Custom plugins for modern UI features
        plugin(({ addUtilities }) => {
          addUtilities({
            // Glass morphism utilities
            ".glass": {
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            },
            ".glass-dark": {
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            },
            // Modern text utilities
            ".text-balance": {
              textWrap: "balance",
            },
            ".text-pretty": {
              textWrap: "pretty",
            },
            // Advanced scrollbar styling
            ".scrollbar-hidden": {
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            },
            ".scrollbar-modern": {
              "&::-webkit-scrollbar": {
                width: "6px",
                height: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "hsl(var(--border))",
                borderRadius: "3px",
              },
            },
          });
        }),
      ],
    },
  ],
};

export default config;
