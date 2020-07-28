import React, { useMemo, useReducer, useCallback } from 'react';
import light from './configs/light';
import dark from './configs/dark';
import { combinedOptions, buildTheme } from './utils';

const defaultConfigs = { light, dark };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'toggle':
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({
  children,
  defaultTheme = 'dark',
  configs = {
    light: {},
    dark: {},
  },
}) => {
  const themeConfigs = combinedOptions(defaultConfigs, configs);

  console.log('themeConfigs', themeConfigs);

  const [theme, dispatch] = useReducer(reducer, {
    value:
      buildTheme(themeConfigs[defaultTheme]) || buildTheme(themeConfigs.light),
    type: defaultTheme || 'light',
  });

  console.log('theme', theme);

  const toggle = useCallback(() => {
    if (theme.type === 'light') {
      dispatch({
        type: 'toggle',
        payload: {
          value: buildTheme(themeConfigs.dark),
          type: 'dark',
        },
      });
    } else {
      dispatch({
        type: 'toggle',
        payload: {
          value: buildTheme(themeConfigs.light),
          type: 'light',
        },
      });
    }
  }, [themeConfigs.dark, themeConfigs.light, theme.type]);

  const themeValue = useMemo(
    () => ({
      theme,
      toggle,
    }),
    [theme, toggle],
  );

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};
