import React, { ReactNode } from 'react';
import { ThemeType } from '../types/theme';
import { useLocalStorage } from '../hooks/use-local-storage';
import { ThemeContext } from './theme-context';

type Props = {
	children: ReactNode;
};

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useLocalStorage<ThemeType>('theme', 'dark');

	const changeTheme = (choice: ThemeType) => {
		setTheme(choice);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme,
			}}
		>
			<>{children}</>
		</ThemeContext.Provider>
	);
};
