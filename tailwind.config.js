/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			colors: {
				primary: '#BA9E76',
				content: {
					primary: '#342F2C',
					secondary: '#CACACA'
				},
				background: {
					primary: '#FFFBEF',
					secondary: '#342F2C',
					tertiary: '#675C55'
				}
			}
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			serif: ['Copperplate CC', 'serif']
		}
	},
	plugins: []
}
