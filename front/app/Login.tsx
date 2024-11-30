import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Background from '@/components/Background';
import Logo from '@/components/Logo';
import Header from '@/components/Header';
import Button from '@/components/Button';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false); // State to toggle reset screen visibility

  const router = useRouter(); // Access the router for navigation

  

  const handleLogin = () => {
    if (username && password) {
      alert('Logged in successfully!');
      router.push('/Home');
    } else {
      alert('Please enter valid credentials');
    }
  };

  
  
  return (
    <Background>
      
      <View style={styles.formContainer}>
      <Logo />
      <Header>Welcome back</Header>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
       
        <Button mode="contained" onPress={handleLogin}>
          Login
        </Button>      
        </View>
    </Background>
  );
}
Login.options = {
  headerShown: false, // This hides the header for the Login screen
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    maxWidth: 340, // Limit form width for better layout
    padding: 10,
    justifyContent: 'center', // Vertically center form elements
    alignItems: 'center', // Horizontally center form elements
    borderRadius: 8, // Optional rounded corners for form
    marginBottom:200,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});
