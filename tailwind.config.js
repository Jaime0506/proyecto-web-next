import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#FF0000"
            },
            backgroundColor: {
                "primary": "#FF0000"
            },
            borderColor: {
                "primary": "#FF0000"
            },
            textColor: {
                "primary": "#FF0000"
            }
        },
    },
    darkMode: "class",
    plugins: [heroui()]
}

export default config;