import clsx from 'clsx';
import { useThemeContext } from './use-theme-context';

export const useThemeColors = () => {
	const themeContext = useThemeContext();
	const { theme } = themeContext;

	const cssClasses = clsx({
		base: theme === 'dark',
		light: theme === 'light',
		pink: theme === 'pink',
	});

	return cssClasses;
};
