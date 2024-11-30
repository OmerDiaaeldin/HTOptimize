import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfile = () => {
  const user = {
    name: 'Abir Arhrimaz',
    email: 'Abir.arhr@example.com',
    profileImage: require('../Account/user.png'),
  };

  return (
    <View style={styles.container}>
      <Image source={user.profileImage} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  editButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#5194c2',
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UserProfile;
