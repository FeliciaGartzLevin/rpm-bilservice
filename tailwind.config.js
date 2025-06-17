/** @type {import('tailwindcss').Config} */
import themeSwapper from 'tailwindcss-theme-swapper';
import Color from 'color';

const primaryColors = {
	red: '#CD272B',
	light: '#EDEFEE',
};

const lighten = (clr, val) => Color(clr).lighten(val).hex();

/* Themes */
const darkTheme = {
	colors: {
		accentColor: {
			strong: primaryColors.red,
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
		backgroundColor: {
			primary: '#F1E9DA',
			secondary: '#007090',
		},
		textColor: {
			primary: '#170003',
			secondary: '#030708',
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
			fontFamily: {
				header: ['"Racing Sans One"', 'sans-serif'],
				body: ['"Radio Canada Big"', 'sans-serif'],
			},
			colors: {
				hero: primaryColors.light,
				button: {
					red: primaryColors.red,
					'red-hover': lighten(primaryColors.red, -0.4),
				},
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
			],
		}),
	],
};
