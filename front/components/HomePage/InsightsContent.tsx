import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InsightsContent = () => {
  const dataAvailable = true;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Usage Insights</Text>
      {dataAvailable ? (
        <Text style={styles.text}>
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
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {
    fontSize: 16,
    color: '#f13a59',
  },
});

export default InsightsContent;
