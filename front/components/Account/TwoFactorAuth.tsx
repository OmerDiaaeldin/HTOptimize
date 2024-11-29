import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type TwoFactorAuthProps = {
  onNavigateBack: () => void;
};

const TwoFactorAuth: React.FC<TwoFactorAuthProps> = ({ onNavigateBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Two-Factor Authentication</Text>
      <Text style={styles.text}>Setup Two-Factor Authentication here.</Text>

      <TouchableOpacity onPress={onNavigateBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: "#FF6F61",
    borderRadius: 30,
  },
  backButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default TwoFactorAuth;
