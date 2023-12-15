/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'body-pattern': "url('/img/bg.svg')",
            }
        },
    },
    plugins: [],
}