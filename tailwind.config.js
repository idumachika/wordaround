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
	},
	variants: {
		extend: {
			flex: ['hover', 'active'],
		},
	},
	plugins: [],
}
