/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter Variable', 'sans-serif'],
        },
        colors: {
          primary: {
            light: '#eb8723',
            dark: '#ed8e2f',
          },
          background: {
            light: '#ffffff',
            dark: '#1d1e21',
          },
          text: {
            light: '#1f2937',
            dark: '#f9fafb',
          },
          card: {
            light: '#dcdde3',
            dark: '#313238',
          },
        },
      },
    },
    plugins: [],
  }