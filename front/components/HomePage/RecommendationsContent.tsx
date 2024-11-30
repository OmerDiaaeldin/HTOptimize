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
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
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
