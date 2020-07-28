import { StyleSheet } from 'react-native';

export const combinedOptions = (defaultConfigs, configs) => {
  let themeConfigs = {
    light: { ...defaultConfigs.light },
    dark: { ...defaultConfigs.dark },
  };

  if (configs) {
    if (configs.light) {
      themeConfigs.light = { ...themeConfigs.light, ...configs.light };
    }
    if (configs.dark) {
      themeConfigs.dark = { ...themeConfigs.dark, ...configs.dark };
    }
  }
  return themeConfigs;
};

const mapTypo = (value, key) => {
  const keys = Object.keys(value);
  const styleKeys = keys.filter((element) => element.startsWith(key));

  let style = {};
  for (let styleKey of styleKeys) {
    if (styleKey.endsWith('font-size')) {
      style.fontSize = value[styleKey];
    } else if (styleKey.endsWith('line-height')) {
      style.lineHeight = value[styleKey];
    } else if (styleKey.endsWith('letter-spacing')) {
      style.letterSpacing = value[styleKey];
    }
  }
  return style;
};

const mapTypos = (typos, value) => {
  let style = { typos: {} };
  typos.map(
    (typo) => (style.typos[typo] = StyleSheet.create(mapTypo(value, typo))),
  );
  return style;
};

const mapColor = (value) => {
  const keys = Object.keys(value);
  const styleKeys = keys.filter((element) => element.endsWith('color'));

  let style = { borderColors: {}, colors: {}, backgroundColors: {} };
  let borderColors = {};
  let backgroundColors = {};
  let colors = {};

  for (let styleKey of styleKeys) {
    const color = value[styleKey];
    borderColors[styleKey] = { borderColor: color };
    colors[styleKey] = { color: color };
    backgroundColors[styleKey] = {
      backgroundColor: color,
    };
  }

  style.borderColors = StyleSheet.create(borderColors);
  style.colors = StyleSheet.create(colors);
  style.backgroundColors = StyleSheet.create(backgroundColors);

  return style;
};

// const mapSpacing = (base) => {
// console.log('base', base);
// const margin
// };

export const buildTheme = (themeValue) => {
  let styles = {};
  // typography
  const buildedTypography = mapTypos(
    [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'caption',
      'body1',
      'body2',
    ],
    themeValue,
  );
  const themeTypos = buildedTypography.typos;

  // color
  const colors = mapColor(themeValue);
  const themeColors = colors.colors;
  const themeBackgroundColors = colors.backgroundColors;
  const themeBorderColors = colors.borderColors;

  // spacing
  // const themeSpacing = mapSpacing(themeValue['base-spacing']);

  // combined styles
  styles = {
    colors: themeColors,
    borderColors: themeBorderColors,
    backgroundColors: themeBackgroundColors,
    typography: themeTypos,
  };

  return styles;
};
