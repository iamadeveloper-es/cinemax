/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app.vue',
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    '300rgba-80': 'rgba(18, 24, 41, .8)'
                },
                grey: {
                    900: '#121829',
                    200: '#A8AEBF'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
                'primary-light': 'Poppins-Light'
            },
            spacing: {
                128: '32rem',
                144: '36rem'
            }
        }
    },
    plugins: []
}
