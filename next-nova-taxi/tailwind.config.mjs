/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "nova-bg": "#0a0f1a",
        "nova-bg-soft": "#111827",
        "nova-gold": "#fbbf24",
        "nova-gold-soft": "#fcd34d",
        // Improved contrast colors (WCAG AA compliant)
        "nova-muted": "#d1d5db", // Lighter for better contrast
        "nova-text": "#f3f4f6",
        "nova-text-secondary": "#e5e7eb",
      },
      // Minimum tap target sizes for accessibility
      minHeight: {
        'tap': '44px',
      },
      minWidth: {
        'tap': '44px',
      },
      // Better spacing for touch targets
      spacing: {
        'tap': '44px',
      }
    }
  },
  plugins: []
};

export default config;
