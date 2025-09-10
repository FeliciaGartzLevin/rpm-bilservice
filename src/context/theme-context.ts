import { createContext } from 'react';
import { ThemeType } from '../types/theme';

type ThemeContextType = {
	theme: ThemeType;
	changeTheme: (change: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
