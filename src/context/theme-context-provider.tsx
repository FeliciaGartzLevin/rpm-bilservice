import React, { ReactNode, createContext } from 'react';
import { ThemeType } from '../types/theme';
import { useLocalStorage } from '../hooks/use-local-storage';

type ThemeContextType = {
	theme: ThemeType;
	changeTheme: (change: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

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
