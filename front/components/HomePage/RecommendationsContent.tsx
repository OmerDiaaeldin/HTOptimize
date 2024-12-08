import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecommendationsContent = () => {
  const recommendations = [
    'Fix leaking faucets to save up to 3 gallons per day.',
    'Install low-flow showerheads to reduce water usage.',
    'Water your plants early in the morning to minimize evaporation.',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water-Saving Recommendations</Text>
      {recommendations.map((recommendation, index) => (
        <Text key={index} style={styles.recommendation}>
          {index + 1}. {recommendation}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '98%', // Adjust width as needed (can be fixed or percentage of screen width)
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
    marginBottom: 50,
    marginTop: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recommendation: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default RecommendationsContent;
