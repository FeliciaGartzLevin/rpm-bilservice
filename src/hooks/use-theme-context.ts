import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context-provider';

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Can't use ThemeContext");
  }

  return themeContext;
};
