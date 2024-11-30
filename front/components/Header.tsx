import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextProps } from 'react-native';  // Import TextProps to type the props
import { theme } from '../core/theme';

// Define the type for the props to be passed into the Header component
interface HeaderProps extends TextProps {
  // You can add any additional custom props here, if necessary
}

const Header: React.FC<HeaderProps> = (props) => {
  return <Text style={styles.header} {...props} />;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: '400',
    paddingVertical: 12,
  },
});

export default Header;
