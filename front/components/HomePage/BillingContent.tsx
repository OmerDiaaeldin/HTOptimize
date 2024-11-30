import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BillingContent = () => {
  const handleDownloadReport = () => {
    alert('Downloading your water usage report...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Billing Information</Text>
      <Text style={styles.text}>Water Usage: 2500 gallons</Text>
      <Text style={styles.text}>Current Bill: $75.00</Text>
      <TouchableOpacity style={styles.button} onPress={handleDownloadReport}>
        <Text style={styles.buttonText}>Download Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#5194c2',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BillingContent;
