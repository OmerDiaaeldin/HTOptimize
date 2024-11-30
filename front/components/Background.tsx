import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

interface BackgroundProps {
  children: ReactNode;
}

const theme = {
  colors: {
    text: '#000000',
    primary: '#5194c2',
    secondary: '#414757',
    error: '#f13a59',
    surface: '#FFFFFF',
    background: '#F0F0F0',
  },
} as const;

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/images/background_dot2.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensure the background takes up the full screen
    width: '100%',
    height: '100%', // Ensure height covers the entire screen
  },
  container: {
    flex: 1, // Ensure the container takes up the full screen
    justifyContent: 'center', // Vertically center content
    alignItems: 'center', // Horizontally center content
    padding: 20, // Add padding around the content
  },
});

export default Background;
