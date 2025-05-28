/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // 기본적으로 가운데 정렬
      padding: '1rem', // 좌우 패딩
      screens: {
        sm: '100%',    // sm 이상에서 100%
        md: '720px',   // md 이상에서 720px
        lg: '960px',   // lg 이상에서 960px
        xl: '1200px',  // xl 이상에서 1140px
        '2xl': '1200px' // 2xl 이상에서 1320px
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
