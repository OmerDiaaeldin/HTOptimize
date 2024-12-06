import React, { useContext, useState } from 'react';
import { TouchableOpacity, View, TextInput, Text, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Background from '@/components/Background';
import Logo from '@/components/Logo';
import Header from '@/components/Header';
import Button from '@/components/Button';
import apiClient from "../api"
import { useAuth } from '@/context/AuthContext';
import { UserContext } from '@/context/UserContext';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false); // State to toggle reset screen visibility

  const router = useRouter(); // Access the router for navigation
  const { login } = useAuth();
  const {loginUser} = useContext(UserContext)


  

  const handleLogin = async () => {
    try {
      const response = await apiClient.post('/auth/login', {
        userName: username,
        password,
      });
      if (response.data) {
        const { jwt, username, houseId } = response.data;
        login(jwt);
        loginUser({ username, houseId });
        
        router.push('/Home');
        Alert.alert('Login successful');
      } else {
        Alert.alert('Login failed');
      }
    } catch (error) {
      Alert.alert('Login Error', 'Unable to log in');
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
