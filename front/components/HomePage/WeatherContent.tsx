import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Information</Text>
      <Text>Weather API data will appear here, including drought alerts.</Text>
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
});

export default WeatherContent;
