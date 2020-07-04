import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const useTheme = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return [theme, toggle];
};

export default useTheme;
