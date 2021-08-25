const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	// remove unused styles
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#1c1c1c',
				secondary: '#1484D7',
				'page-bg': '#DAE0E6',
			},
		},
		screens: {
			xs: { max: '380px' },
			// => @media (max-width: 375px) { ... }
			...defaultTheme.screens,
			lg: { max: '1024px' },
			// // => @media (max-width: 1023px) { ... }
			md: { max: '768px' },
			// // => @media (max-width: 767px) { ... }
			sm: { max: '640px' },
			// // => @media (max-width: 639px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
