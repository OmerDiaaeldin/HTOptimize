import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface UserContainerProps {
  name: string;
  address: string;
  profileImage?: any; // Optional: fallback to local image
}

const UserContainer: React.FC<UserContainerProps> = ({
  name,
  address,
  profileImage = require('../assets/images/user.png'), // Local image fallback
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Welcome Back, {name}!</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Aligns image and text side-by-side
    alignItems: 'center', // Center vertically
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20, // Space below the container
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Adds shadow for Android
  },
  image: {
    width: 60, // Adjust image size
    height: 0,
    borderRadius: 30, // Makes it circular
    marginRight: 15, // Space between image and text
  },
  textContainer: {
    flex: 1, // Allow text to expand as needed
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  address: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});

export default UserContainer;
