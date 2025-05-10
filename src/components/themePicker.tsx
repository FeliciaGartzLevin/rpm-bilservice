import React from 'react';
import { ThemeType, themeValues } from '../types/theme';
import { useThemeContext } from '../hooks/use-theme-context';

export const ThemePicker: React.FC = () => {
	const themeContext = useThemeContext();
	const { theme, changeTheme } = themeContext;

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		changeTheme(event.target.value as ThemeType);
	};

	return (
		<>
			<p>Theme: {theme}</p>

			<label htmlFor="themePicker">Choose theme:</label>

			<select
				name="theme"
				id="themePicker"
				value={theme}
				onChange={handleChange}
				className="bg-backgroundColor-primary text-primary"
			>
				{themeValues.map((themeValue) => (
					<option key={themeValue} value={themeValue}>
						{themeValue.charAt(0).toUpperCase() +
							themeValue.slice(1)}
					</option>
				))}
			</select>
		</>
	);
};
