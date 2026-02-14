/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#10B981', // Emerald 500
                secondary: '#064E3B', // Emerald 900
                accent: '#F59E0B', // Amber 500
                background: '#F9FAFB', // Gray 50
                surface: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                arabic: ['Noto Naskh Arabic', 'serif'],
            },
        },
    },
    plugins: [],
}
