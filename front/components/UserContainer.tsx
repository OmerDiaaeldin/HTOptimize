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
    width: '100%', // Adjust width as needed (can be fixed or percentage of screen width)
    maxWidth: 400, // Optional: Max width for larger screens
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    borderColor: '#FFF', // Border color for the box
    shadowColor: '#000', // Darker shadow color for a more prominent effect
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 7,
    shadowOpacity: 0.3, // Increase opacity for a stronger shadow effect
    elevation: 5, // For Android shadow effect
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    borderWidth: 2,
    margin: 1,
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
    fontSize: 20,
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
