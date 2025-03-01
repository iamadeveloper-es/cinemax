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
                black: '#000000',
                primary: {
                    '300rgba-80': 'rgba(18, 24, 41, .8)'
                },
                grey: {
                    900: '#121829',
                    200: '#A8AEBF',
                    400: '#767E94'
                },
                warning: {
                    500: '#FFAD49'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                'heading-one': ['Poppins-Semibold', 'sans-serif'],
                'heading-three': ['Poppins-Semibold', 'sans-serif'],
                'heading-four': ['Poppins-Semibold', 'sans-serif'],
                'primary-light': 'Poppins-Light'
            },
            fontSize: {
                'heading-one': '4em',
                'heading-three': '2em',
                'heading-four': '2.125em'
            }
        }
    },
    plugins: []
}
