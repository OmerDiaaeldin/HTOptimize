import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import { launchImageLibrary, ImagePickerResponse, ImageLibraryOptions } from 'react-native-image-picker'; // Updated import

type EditProfileProps = {
  onNavigateBack: () => void; // Callback to navigate back
};

const EditProfile: React.FC<EditProfileProps> = ({ onNavigateBack }) => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [profileImage, setProfileImage] = useState<string | null>(null); // Explicitly typed to handle image URI
  const [isLoading, setIsLoading] = useState(false);

  // Validate the fields before saving
  const handleSave = () => {
    // Validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    // Validate phone number (simple check, you can adjust this based on format)
    const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert("Invalid Phone Number", "Please enter a valid phone number (XXX-XXX-XXXX).");
      return;
    }

    setIsLoading(true);
    // Simulate a save operation (you can replace this with an API call)
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Profile Updated", "Your profile has been successfully updated.");
      onNavigateBack(); // Navigate back or do other action passed from the parent
    }, 1500); // Simulate a network delay
  };

  // Function to select a profile image
  const selectImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: "photo",
      quality: 1,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => { // Explicitly typed response
      if (response.didCancel) {
        Alert.alert("Canceled", "Image selection was canceled.");
      } else if (response.errorCode) {
        Alert.alert("Error", response.errorMessage);
      } else {
        const assets = response.assets;
        if (assets && assets.length > 0) {
          const uri = assets[0]?.uri;
          if (uri) {
            setProfileImage(uri);
          } else {
            Alert.alert("Error", "No valid image URI found.");
          }
        } else {
          Alert.alert("Error", "No image selected.");
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      {/* Profile Image */}
      <TouchableOpacity onPress={selectImage}>
        <View style={styles.imageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.image} />
          ) : (
            <Text style={styles.imagePlaceholder}>Upload Picture</Text>
          )}
        </View>
      </TouchableOpacity>
      <Text style={styles.imageNote}>Tap to upload your profile picture</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        placeholderTextColor="#aaa"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number (XXX-XXX-XXXX)"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={isLoading}>
        {isLoading ? (
          <Text style={styles.saveButtonText}>Saving...</Text>
        ) : (
          <Text style={styles.saveButtonText}>Save Changes</Text>
        )}
      </TouchableOpacity>

      {/* Back to Account Button */}
      <TouchableOpacity style={styles.backButton} onPress={onNavigateBack}>
        <Text style={styles.backButtonText}>Back to Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imagePlaceholder: {
    fontSize: 16,
    color: "#757575",
  },
  imageNote: {
    textAlign: "center",
    fontSize: 14,
    color: "#757575",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#007BFF",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#f44336", // Red color
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EditProfile;
