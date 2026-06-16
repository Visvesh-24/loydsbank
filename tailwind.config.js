/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Loyds brand palette (inspired by the references)
        forest: {
          DEFAULT: "#024731",
          deep: "#013023",
          dark: "#0a3d2b",
          900: "#012b1f",
        },
        moss: "#02684a",
        emerald2: "#00a05a",
        lime: {
          DEFAULT: "#6fe39b",
          bright: "#5fdd8a",
          glow: "#8ef0b0",
        },
        mint: {
          DEFAULT: "#c9f3da",
          soft: "#e4f8ec",
          pale: "#f1faf4",
        },
        charcoal: {
          DEFAULT: "#1b1b1b",
          soft: "#2a2a2a",
        },
        cream: "#f6f4ef",
        gold: {
          DEFAULT: "#b08d3c",
          light: "#d4b765",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
        antique: ["'Playfair Display'", "Georgia", "ui-serif", "serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(2, 71, 49, 0.18)",
        soft: "0 4px 24px -8px rgba(0,0,0,0.12)",
        lift: "0 24px 60px -20px rgba(2, 71, 49, 0.35)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.96)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.32s cubic-bezier(0.16,1,0.3,1)",
        fadeIn: "fadeIn 0.5s ease both",
        scaleIn: "scaleIn 0.22s cubic-bezier(0.16,1,0.3,1)",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};
