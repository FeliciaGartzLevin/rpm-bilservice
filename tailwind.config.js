/** @type {import('tailwindcss').Config} */
import themeSwapper from 'tailwindcss-theme-swapper';

/* Themes */
const darkTheme = {
	colors: {
		accentColor: {
			red: '#CD272B',
		},
		backgroundColor: {
			primary: '#030708', //#2E294E
		},
		textColor: {
			primary: '#EDEFEE',
			secondary: '#F1E9DA',
		},
		grey: '#CCCCCA',
	},
};

const lightTheme = {
	colors: {
		accentColor: {
			light: '#FF88DC',
		},
		backgroundColor: {
			primary: '#F1E9DA',
			secondary: '#007090',
		},
		textColor: {
			primary: '#2E294E',
			secondary: '#F1E9DA',
		},
	},
};

const pinkTheme = {
	colors: {
		accentColor: {
			light: '#9CF6F6',
		},
		backgroundColor: {
			primary: '#EDADCA',
			secondary: '#7E5A9B',
		},
		textColor: {
			primary: '#63458A',
			secondary: '#F1E9DA',
		},
	},
};

/* Tailwind config */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				'full-app-side-spacing': '1.5rem',
			},
			maxWidth: {
				content: '1200px',
			},
		},
	},
	plugins: [
		themeSwapper({
			themes: [
				{
					name: 'base',
					selectors: [':root'],
					theme: darkTheme,
				},
				{
					name: 'light',
					selectors: ['.light'],
					theme: lightTheme,
				},
				{
					name: 'pink',
					selectors: ['.pink'],
					theme: pinkTheme,
				},
			],
		}),
	],
};
