import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Dimensions, View, SafeAreaView } from 'react-native';
import HomeContent from '../../components/HomePage/HomeContent';
import WeatherContent from '../../components/HomePage/WeatherContent';
import RecommendationsContent from '../../components/HomePage/RecommendationsContent';
import UserContainer from '@/components/UserContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Chatbot from 'react-chatbotify';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const [user, setUser] = useState({
    username: 'Yahya',
  });

  useEffect(() => {
    AsyncStorage.getItem('user').then((data) => {
      const user = JSON.parse(data || `{username: 'John Doe'}`);
      setUser(user);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Chatbot at the Top Right */}
      <View style={styles.chatbotContainer}>
        <Chatbot
          styles={{
            chatButtonStyle: {
              backgroundColor: "#00bfff", // Customize chat button color
              width: 60, // Adjust button size
              height: 60, // Adjust button size
              borderRadius: 30, // Make button circular
            },
            notificationBadgeStyle: {
              backgroundColor: "3399FF", // Adjust background color of message box
              color: "#fff", // Set message text color
            },
          }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* User Header */}
        <UserContainer name={user.username} address={""} profileImage={""} />
        
        {/* Home Section */}
        <HomeContent />
        
        {/* Weather Section */}
        <WeatherContent />
        
        {/* Recommendations Section */}
        <RecommendationsContent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 0, // Removed padding at the bottom to remove unnecessary space
  },
  chatbotContainer: {
    position: 'fixed',  // Ensure fixed position on the screen
    top: '10%',  // Adjust top percentage to be dynamic and responsive
    right: 20,
    zIndex: 10, // Ensure chatbot is on top
    paddingBottom: 10, // Add padding to avoid cut-off on some devices
  },
});

export default Home;
