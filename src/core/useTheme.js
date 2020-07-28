import { useContext, useCallback } from 'react';
import { ThemeContext } from './ThemeProvider';

const useTheme = () => {
  const { theme } = useContext(ThemeContext);

  const borderColor = useCallback((key) => theme.value.borderColors[key], [
    theme,
  ]);

  const backgroundColor = useCallback(
    (key) => {
      theme.value.borderColors[key];
    },
    [theme],
  );

  const color = useCallback((key) => theme.value.colors[key], [theme]);

  const typography = useCallback((key) => theme.value.typography[key], [theme]);

  return { theme, backgroundColor, color, typography, borderColor };
};

export default useTheme;
