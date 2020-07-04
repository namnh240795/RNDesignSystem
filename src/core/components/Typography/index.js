import React from 'react';
import { Text } from 'react-native';
import useTheme from '../../useTheme';

const Typography = ({ style, children, ...rest }) => {
  const [{ value }, toggle] = useTheme();
  return (
    <Text style={[value.primary, style]} {...rest} onPress={toggle}>
      {children}
    </Text>
  );
};

export default Typography;
