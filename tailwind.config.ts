/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        red: {
          100: "#feddde",
          200: "#fcbbbe",
          300: "#fb989d",
          400: "#f9767d",
          500: "#f8545c",
          600: "#c6434a",
          700: "#953237",
          800: "#632225",
          900: "#321112",
        },
        darkblue: {
          50: "#F2F9FD",
          100: "#cfd3d6",
          200: "#9fa7ac",
          300: "#6e7a83",
          400: "#3e4e59",
          500: "#0e2230",
          600: "#2376A6",
          700: "#08141d",
          800: "#060e13",
          900: "#03070a",
        },
        spaceblue: {
          400: "#73B9EB",
          500: "#53ACEC",
          800: "#1E3D54",
        },
        grayblue: {
          100: "#e6f2fb",
          200: "#cde5f6",
          300: "#b5d9f2",
          400: "#9ccced",
          500: "#83bfe9",
          600: "#6999ba",
          700: "#4f738c",
          800: "#344c5d",
          900: "#1a262f",
        },
      },
      fontFamily: {
        styreneA: ["StyreneA", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
