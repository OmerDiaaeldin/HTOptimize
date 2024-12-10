import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const WeatherCards = ({ data }: {data: any}) => {
  // Convert object to array for easy mapping
  const dataArray = Object.entries(data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Information</Text>
      <FlatList
        data={dataArray}
        keyExtractor={(item: any, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardKey}>{item[0].replace(/_/g, ' ')}</Text>
            <Text style={styles.cardValue}>{item[1]}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default function App(data: any) {
  const DummyWeatherData = {
    interval: "900 seconds",
    rain: "0 mm",
    relative_humidity_2m: "32 %",
    showers: "0 mm",
    snowfall: "0 cm",
    temperature_2m: "11.4 °C",
    time: "2024-12-06T18:00 iso8601",
  };
  return <WeatherCards data={data?.data || DummyWeatherData} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardKey: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  cardValue: {
    fontSize: 16,
    color: '#333',
  },
});
