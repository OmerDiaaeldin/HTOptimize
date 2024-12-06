import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MenuItem from '../../components/HomePage/MenuItem';
import HomeContent from '../../components/HomePage/HomeContent';
import WeatherContent from '../../components/HomePage/WeatherContent';
import BillingContent from '../../components/HomePage/BillingContent';
import RecommendationsContent from '../../components/HomePage/RecommendationsContent';
import InsightsContent from '../../components/HomePage/InsightsContent';
import UserContainer from '@/components/UserContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  const [user, setUser] = useState({
    username: 'John Doe',
  });

  useEffect(() => {
    AsyncStorage.getItem('user').then((data) => {
      const user = JSON.parse(data || `{username: 'John Doe'}`);
      setUser(user);
    });
  }, []);
  return (
    <ScrollView style={styles.containerUser}>
       {/* User Header */}
       <UserContainer
        name={user.username}
        address={""}
        profileImage={""}
      />
      {/* Home Section */}
      <HomeContent />
      {/* Weather Section */}
      <WeatherContent />
      {/* Billing Section */}
      {/* <BillingContent /> */}
      {/* Account Section */}
      <RecommendationsContent />
      {/* Insights Section */}
      {/* <InsightsContent /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  containerUser: {
    padding: 20, // Adjust padding as needed
    backgroundColor: '#F0F0F0',
  },
});

export default Home;
