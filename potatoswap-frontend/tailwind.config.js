/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'light-gray': '#A0A0A0',
				'dark-gray': '#646464',
				'main-green': '#09BE9E',
				'light-green': '#D7F0EC',
				'dark-green': '#127364',
			},
		},
	},
	plugins: [],
};
