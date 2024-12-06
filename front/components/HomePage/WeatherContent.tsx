import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherCard from '@/components/WeatherCard';
const WeatherContent = () => {

  const [weatherData, setWeatherData] = React.useState<any>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,rain,showers,snowfall`
      fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => {
          const result:any = {}
          for(let i = 0;i<Object.keys(data.current).length;i++){
            const key = Object.keys(data.current)[i]
            const value = data.current[key]
            const unit = data.current_units[key]
            result[key] = `${value} ${unit}`
          }
          setWeatherData(result);
        });
    });
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Information</Text>
      <WeatherCard data={weatherData}/>
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
