/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {    
          fontFamily: {
          mono: ['"JetBrains Mono"', 'monospace'],
          serif: ['"Playfair Display"', 'serif'],
        },
      colors: {
        bg: "var(--bg)",
        card: "var(--bg-card)",
        card2: "var(--bg-card2)",

        surface: "var(--surface)",
        border: "var(--border)",
        borderStrong: "var(--border-strong)",

        primaryText: "var(--text-primary)",
        secondaryText: "var(--text-secondary)",
        mutedText: "var(--text-muted)",

        accent: "var(--accent)",
        accentHover: "var(--accent-hover)",
        accentGlow: "var(--accent-glow)",

        green: "#34d399",
        cyan: "#22d3ee",
        orange: "#fb923c",
        pink: "#f472b6",
        yellow: "#fbbf24",

        syntaxKeyword: "var(--syntax-keyword)",
        syntaxFunction: "var(--syntax-function)",
        syntaxString: "var(--syntax-string)",
        syntaxVariable: "var(--syntax-variable)",
        syntaxType: "var(--syntax-type)",
      },
      screens: {
        'xs': '400px',
        'lg+': '1120px',
        ...defaultTheme.screens,
      },
    animation: {
      float: "float 8s ease-in-out infinite",
      blink: "blink 1.1s step-start infinite",
      "scroll-drop": "scroll-drop 1.8s ease-in-out infinite",
      "chip-float": "chip-float 5s ease-in-out infinite",
      "reveal-up": "reveal-up 0.5s ease-out forwards",
      "reveal-left": "reveal-left 0.5s ease-out forwards",
      "reveal-right": "reveal-right 0.5s ease-out forwards",
      "reveal-scale": "reveal-scale 0.5s ease-out forwards",
      "reveal-fade": "reveal-fade 0.5s ease-out forwards",
      "bounce-arrow": "bounce-arrow 2s ease-in-out infinite",
    },
    keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "scroll-drop": {
          "0%,100%": {
            transform: "scaleY(1)",
            opacity: "0.4",
          },
          "50%": {
            transform: "scaleY(0.6)",
            opacity: "1",
          },
        },
        "chip-float": {
          "0%,100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-6px)",
          },
        },
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "reveal-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "reveal-scale": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "reveal-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bounce-arrow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
    },
  },
  plugins: [],
}
