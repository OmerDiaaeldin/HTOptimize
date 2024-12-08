import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InsightsContent = () => {
  const dataAvailable = true;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Usage Insights</Text>
      {dataAvailable ? (
        <Text style={styles.subtitle}>
          [Graph Placeholder] Historical water usage graph will appear here.
        </Text>
      ) : (
        <Text style={styles.errorText}>Unable to generate insights at the moment.</Text>
      )}
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
    borderWidth: 2, // Adds a solid border
    shadowColor: '#000', // Darker shadow color for a more prominent effect
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 7,
    shadowOpacity: 0.3, // Increased opacity for a stronger shadow effect
    elevation: 5, // For Android shadow effect
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#737373', // Light grey for subtitle
  },
  errorText: {
    fontSize: 16,
    color: '#f13a59',
  },
});

export default InsightsContent;
