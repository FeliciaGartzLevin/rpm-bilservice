import React from 'react';
import { ThemeType } from '../types/theme';
import { useThemeContext } from '../hooks/use-theme-context';
import { IoCarSportSharp } from 'react-icons/io5';

export const ThemePicker: React.FC = () => {
	const themeContext = useThemeContext();
	const { theme, changeTheme } = themeContext;

	const handleChange = () => {
		changeTheme((theme === 'light' ? 'dark' : 'light') as ThemeType);
	};

	return (
		<>
			<button
				type="button"
				title="Theme picker"
				onClick={handleChange}
				className="rounded bg-backgroundColor-primary hover:cursor-pointer hover:text-accentColor-strong hover-animation-effect text-textColor-primary px-2"
			>
				<IoCarSportSharp size={32} />
			</button>
		</>
	);
};
