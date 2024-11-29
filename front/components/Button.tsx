import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Define types for the props (including the optional 'mode' and 'style')
interface ButtonProps {
  mode?: 'contained' | 'outlined'; // Define button modes
  style?: ViewStyle | ViewStyle[]; // Allow custom styles to be passed
  onPress: () => void; // Define the onPress function
  children: React.ReactNode; // Define the content inside the button (e.g., text)
}

const Button: React.FC<ButtonProps> = ({ mode = 'contained', style, onPress, children }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        mode === 'outlined' && styles.outlined,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, mode === 'outlined' && styles.outlinedText]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5194c2', // Default background for 'contained' mode
    marginVertical: 10,
  },
  outlined: {
    borderWidth: 1,
    borderColor: '#5194c2', // Border color for 'outlined' mode
    backgroundColor: 'transparent',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: '#ffffff', // Text color for 'contained' mode
  },
  outlinedText: {
    color: '#5194c2', // Text color for 'outlined' mode
  },
});

export default Button;
