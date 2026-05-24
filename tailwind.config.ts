import {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                xl: "1440px",
                "2xl": "1920px",
                md: "768px",
                sm: "410px"
            }
        },
    },
    plugins: []
}

export default config