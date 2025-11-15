/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'variable-collection-colorpriamry': 'var(--variable-collection-colorpriamry)',
        'variable-collection-coloryellow': 'var(--variable-collection-coloryellow)',
      },
      fontFamily: {
        '16-medium': 'var(--16-medium-font-family)',
      },
      boxShadow: {
        box: 'var(--box)',
      },
    },
  },
  plugins: [],
};
