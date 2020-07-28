interface TypographyFn {
  (type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'caption'): StyleSheet;
}

interface UseThemeResult {
  typography: TypographyFn;
}

export default function useTheme(): UseThemeResult;
