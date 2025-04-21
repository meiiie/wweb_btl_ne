/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        // Màu chính - xanh hải quân (Navy)
        primary: {
          DEFAULT: "#003366",
          50: "#e6edf5",
          100: "#ccdaeb",
          200: "#99b5d6",
          300: "#6691c2",
          400: "#336cad",
          500: "#003366",
          600: "#002d5a",
          700: "#00254b",
          800: "#001c39",
          900: "#001326",
        },

        // Màu phụ - xanh dương sáng (Primary Accent)
        secondary: {
          DEFAULT: "#005BBB",
          50: "#e6f0fa",
          100: "#cce1f5",
          200: "#99c3eb",
          300: "#66a5e0",
          400: "#3387d6",
          500: "#005BBB",
          600: "#0051a7",
          700: "#00438a",
          800: "#00346a",
          900: "#002347",
        },

        // Màu nhấn - vàng (Accent)
        accent: {
          DEFAULT: "#FFD100",
          50: "#fffbe6",
          100: "#fff7cc",
          200: "#ffef99",
          300: "#ffe766",
          400: "#ffdf33",
          500: "#FFD100",
          600: "#e6bc00",
          700: "#bf9c00",
          800: "#997d00",
          900: "#665300",
        },

        // Màu nền và text
        background: "#ffffff",
        foreground: "#333333",
        muted: {
          DEFAULT: "#f5f7fa",
          foreground: "#666666",
        },

        // Màu trạng thái
        success: "#28a745",
        warning: "#ffc107",
        error: "#dc3545",
        info: "#17a2b8",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
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
}
