import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        textPrimary: 'var(--text-primary)',
        textLight: 'var(--text-light)',
        gray36: 'var(--gray36)',
        gray33: 'var(--gray33)',
        grayd6: 'var(--grayd6)',
        graycc: 'var(--graycc)'
      }
    },
    // screens: {
    //   desktop: '1440px',
    //   mob: '375px',
    //   ...defaultTheme.screens
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem', // Default padding for all screens
        sm: '2rem' // Padding for small screens
      }
    },
    dropShadow: {
      '3xl': '0px 0px 20px rgba(236, 202, 111, 0.36)'
    }
  },
  plugins: []
}
export default config
