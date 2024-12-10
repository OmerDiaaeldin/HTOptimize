import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecommendationsContent = () => {
  const recommendations = [
    'Fix leaking faucets to save up to 3 gallons per day.',
    'Install low-flow showerheads to reduce water usage.',
    'Water your plants early in the morning to minimize evaporation.',
    'Turn off the tap while brushing your teeth to save water.',
    'Use a broom instead of a hose to clean driveways and sidewalks.',
    'Collect rainwater for outdoor use like gardening or washing.',
    'Run dishwashers and washing machines only with full loads.',
    'Install dual-flush toilets to use less water for liquid waste.',
    'Check pipes and irrigation systems regularly for leaks.',
    'Opt for drought-resistant plants in landscaping to conserve water.',
];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Government guidelines</Text>
      <Text style={styles.subtitle}>{'\t Water-Saving Recommendations'}</Text>
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
  subtitle: {
    fontSize: 16, // Slightly smaller than title
    fontWeight: '600', // Semi-bold for a subtitle feel
    color: '#555', // A neutral/dimmed color for subtitling
    marginBottom: 8, // Slight spacing before other content
  },
});

export default RecommendationsContent;
