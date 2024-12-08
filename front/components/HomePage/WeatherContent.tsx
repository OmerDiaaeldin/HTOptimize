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
      <Text style={styles.title}></Text>
      <WeatherCard data={weatherData}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Adjust width as needed (can be fixed or percentage of screen width)
    maxWidth: 400, // Optional: Max width for larger screens
    backgroundColor: '#FFF',
    padding: 25,
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
});

export default WeatherContent;
