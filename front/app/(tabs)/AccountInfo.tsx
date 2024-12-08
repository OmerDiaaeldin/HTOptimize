import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Import screen components
import EditProfile from "@/components/Account/EditProfile";
import ChangePassword from "@/components/Account/ChangePassword";
import TwoFactorAuth from "@/components/Account/TwoFactorAuth";
import LogOut from "@/components/Account/LogOut";



const AccountInfo = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("account"); // Default to 'account' screen

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Handle navigating back to account screen
  const handleNavigateBack = () => {
    setCurrentScreen("account"); // Go back to the 'account' screen
  };

  // Render appropriate screen based on the currentScreen state
  const renderScreen = () => {
    switch (currentScreen) {
      case "editProfile":
        return <EditProfile onNavigateBack={handleNavigateBack} />;
      case "changePassword":
        return <ChangePassword onNavigateBack={handleNavigateBack} />;
      case "twoFactorAuth":
        return <TwoFactorAuth onNavigateBack={handleNavigateBack} />;
      case "LogOut":
        return <LogOut/>;
      default:
        return null; // For 'account' screen, do nothing here, it's already rendered
    }
  };

  return (
    <ScrollView
      style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}
    >
      {/* Profile Section */}
      {currentScreen === "account" && (
        <View style={[styles.profileCard, darkMode ? styles.darkCard : styles.lightCard]}>
          <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.profileImage} />
          <Text style={[styles.profileName, darkMode ? styles.darkText : styles.lightText]}>John Doe</Text>
          <Text style={[styles.profileEmail, darkMode ? styles.darkText : styles.lightText]}>john.doe@gmail.com</Text>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => setCurrentScreen("editProfile")}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Settings Section */}
      {currentScreen === "account" && (
        <View style={styles.settingsSection}>
          <TouchableOpacity
            style={[styles.settingsItem, darkMode ? styles.darkItem : styles.lightItem]}
            onPress={() => setCurrentScreen("changePassword")}
          >
            <Icon name="key" size={24} color="#007BFF" style={styles.settingsIcon} />
            <Text style={[styles.settingsText, darkMode ? styles.darkText : styles.lightText]}>
              Change Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingsItem, darkMode ? styles.darkItem : styles.lightItem]}
            onPress={() => setCurrentScreen("twoFactorAuth")}
          >
            <Icon name="lock" size={24} color="#007BFF" style={styles.settingsIcon} />
            <Text style={[styles.settingsText, darkMode ? styles.darkText : styles.lightText]}>
              Two-Factor Authentication
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Dark Mode Toggle */}
      {currentScreen === "account" && (
        <View style={[styles.darkModeToggle, darkMode ? styles.darkItem : styles.lightItem]}>
          <Text style={[styles.toggleText, darkMode ? styles.darkText : styles.lightText]}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
      )}

      {/* Render Active Screen */}
      <View style={styles.activeScreenContainer}>
        {renderScreen()}
      </View>

      {/* Logout Button */}
      {currentScreen === "account" && (
        <TouchableOpacity
          style={[styles.logoutButton, darkMode ? styles.darkLogout : styles.lightLogout]}
          onPress={() => setCurrentScreen("LogOut")}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "#F8FAFD",
  },
  darkContainer: {
    backgroundColor: "#1E1E2C",
  },
  profileCard: {
    alignItems: "center",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  lightCard: {
    backgroundColor: "#FFFFFF",
  },
  darkCard: {
    backgroundColor: "#2E2E38",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    marginBottom: 10,
  },
  editProfileButton: {
    backgroundColor: "#42A5F5",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  settingsSection: {
    margin: 20,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  lightItem: {
    backgroundColor: "#FFFFFF",
  },
  darkItem: {
    backgroundColor: "#2E2E38",
  },
  settingsIcon: {
    marginRight: 15,
  },
  settingsText: {
    fontSize: 18,
    fontWeight: "500",
  },
  darkModeToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  toggleText: {
    fontSize: 18,
    fontWeight: "500",
  },
  activeScreenContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    borderRadius: 15,
  },
  logoutButton: {
    margin: 20,
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  lightLogout: {
    backgroundColor: "#FF6F61",
  },
  darkLogout: {
    backgroundColor: "#D32F2F",
  },
  lightText: {
    color: "#333333",
  },
  darkText: {
    color: "#FFFFFF",
  },
});

export default AccountInfo;
