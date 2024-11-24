  import React, { useState } from 'react';
  import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
  import { useRouter } from 'expo-router'; // Router for navigation handling


  export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Access the router for navigation

    const handleLogin = () => {
      // Simple login validation logic
      if (username && password) {
        alert('Logged in successfully!');
        
        // Redirect to the home screen (Tabs)
        router.push('/(tabs)/one');
      } else {
        alert('Please enter valid credentials');
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
        {/* Input for Username */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        {/* Input for Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Login Button */}
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  }

  Login.options = {
    headerShown: false, // This hides the header for the Login screen
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
    },
    input: {
      width: '100%',
      padding: 12,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
    },
  });
