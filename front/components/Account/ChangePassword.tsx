import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

type ChangePasswordProps = {
  onNavigateBack: () => void;
};

const ChangePassword: React.FC<ChangePasswordProps> = ({ onNavigateBack }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to validate and handle password change
  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Password Mismatch", "New password and confirmation do not match.");
      return;
    }

    if (newPassword.length < 8) {
      Alert.alert("Weak Password", "Password should be at least 8 characters long.");
      return;
    }

    // Placeholder for backend password change (replace with actual logic)
    Alert.alert("Password Changed", "Your password has been updated successfully.");

    // Clear input fields after successful change
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    // Navigate back to AccountTab
    onNavigateBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Change Password</Text>
      <TextInput
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry
        style={styles.input}
        placeholder="Current Password"
      />
      <TextInput
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        style={styles.input}
        placeholder="New Password"
      />
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
        placeholder="Confirm Password"
      />
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onNavigateBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#42A5F5",
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FF6F61",
    borderRadius: 30,
  },
  backButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default ChangePassword;
