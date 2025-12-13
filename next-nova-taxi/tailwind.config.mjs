/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "nova-bg": "#020617",
        "nova-bg-soft": "#020617",
        "nova-gold": "#fbbf24",
        "nova-gold-soft": "#facc15",
        "nova-muted": "#9ca3af"
      }
    }
  },
  plugins: []
};

export default config;
