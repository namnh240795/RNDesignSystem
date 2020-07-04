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
