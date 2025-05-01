import { useGetRandomPupFact } from '../hooks/use-get-random-pup-fact';
import { useThemeContext } from '../hooks/use-theme-context';
import { ThemeType, themeValues } from '../types/theme';

export const Home = () => {
	const themeContext = useThemeContext();
	const randomPupfact = useGetRandomPupFact();

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
			>
				{themeValues.map((themeValue) => (
					<option key={themeValue} value={themeValue}>
						{themeValue.charAt(0).toUpperCase() +
							themeValue.slice(1)}
					</option>
				))}
			</select>

			<div className="my-5 bg-backgroundColor-secondary p-10 text-textColor-secondary flex justify-center items-center">
				{randomPupfact ? <p>{randomPupfact}</p> : null}
			</div>
		</>
	);
};
