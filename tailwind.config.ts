import type { Config }  from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',      // App directory (Next.js App Router)
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    // Pages directory (Legacy Router)
    './components/**/*.{js,ts,jsx,tsx,mdx}', // All UI components
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',  // If using custom layouts
    './lib/**/*.{js,ts,jsx,tsx,mdx}',      // Any utility/shared modules
    './src/**/*.{js,ts,jsx,tsx,mdx}',      // If you're using /src structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',         // Tailwind blue-600
        'primary-dark': '#1E40AF',  // Tailwind blue-800
        secondary: '#10B981',       // Tailwind emerald-500
        'secondary-dark': '#047857',
        // Add more semantic or brand colors as needed
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Replace with your project font
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 14px rgba(0, 0, 0, 0.05)',
      },
       transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      }
    },
  },
  darkMode: 'class', // or 'media'
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
export default config
