import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Dashboard</Text>
      <Text style={styles.subtitle}>Here you can find personalized insights, weather updates, and more!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Adjust width as needed (can be fixed or percentage of screen width)
    maxWidth: 400, // Optional: Max width for larger screens
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    borderColor: '#FFF', // Border color for the box
    shadowColor: '#000', // Darker shadow color for a more prominent effect
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 7,
    shadowOpacity: 0.3, // Increase opacity for a stronger shadow effect
    elevation: 5, // For Android shadow effect
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#737373', // Light grey for subtitle
  },
});

export default HomeContent;
