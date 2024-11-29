import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const LogOut: React.FC = () => {
  const router = useRouter(); // Access the router for navigation

  const handleLogOut = () => {
    // Your logout logic, such as clearing user data or token
    console.log('User logged out!');

    // Navigate to the Login page after logging out
    router.push('/Login'); // Navigate to the login page
  };

  const handleCancel = () => {
    // Navigate back to the Account tab or screen
    router.push('/(tabs)/AccountInfo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>Are you sure you want to log out?</Text>
      
      {/* Log out button */}
      <Button title="Log Out" onPress={handleLogOut} color="#FF6F61" />
      
      {/* Cancel button */}
      <Button title="Cancel" onPress={handleCancel} color="#42A5F5" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFD', // Light background color
    padding: 20,
  },
  promptText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333333', // Dark text for readability
  },
});

export default LogOut;
