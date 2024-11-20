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
            light: '#2563eb',
            dark: '#60a5fa',
          },
          background: {
            light: '#ffffff',
            dark: '#111827',
          },
          text: {
            light: '#1f2937',
            dark: '#f9fafb',
          }
        },
      },
    },
    plugins: [],
  }