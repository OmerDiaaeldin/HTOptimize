import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Platform } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<'BillingPage' | 'LastPaymentDetails' | 'AIPrediction'>('BillingPage');
  const [lastPayment] = useState({
    date: '2024-11-01',
    amountPaid: 200,
    waterConsumed: 3000,
    timeInterval: '2024-10-01 to 2024-10-31',
    paymentMethod: 'Cash',
  });

  const ratePerLiter = 0.07; // MAD per liter
  const currentConsumption = [100, 200, 150, 300, 250, 400, 350]; // Example water consumption data
  const currentTotal = currentConsumption.reduce((acc, value) => acc + value, 0);
  const currentBillTotal = currentTotal * ratePerLiter;

  // Define data for the chart
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        data: currentConsumption,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#f8f8f8',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  // Render different screens based on currentScreen
  if (currentScreen === 'LastPaymentDetails') {
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Last Payment Details</Text>
        <Text style={styles.detailsText}>Amount Paid: MAD {lastPayment.amountPaid}</Text>
        <Text style={styles.detailsText}>Water Consumed: {lastPayment.waterConsumed} liters</Text>
        <Text style={styles.detailsText}>Time Interval: {lastPayment.timeInterval}</Text>
        <Text style={styles.detailsText}>Date Paid: {lastPayment.date}</Text>
        <Text style={styles.detailsText}>Payment Method: {lastPayment.paymentMethod}</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setCurrentScreen('BillingPage')}
        >
          <Text style={styles.backButtonText}>Back to Billing Page</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (currentScreen === 'AIPrediction') {
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>AI Payment Prediction</Text>
        <Text style={styles.detailsText}>
          Based on your history, your next payment is estimated to be MAD 250.
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setCurrentScreen('BillingPage')}
        >
          <Text style={styles.backButtonText}>Back to Billing Page</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Default: BillingPage
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Billing Page</Text>

      {/* Last Payment Window */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => setCurrentScreen('LastPaymentDetails')}
      >
        <Text style={styles.cardTitle}>Last Payment</Text>
        <Text>Date: {lastPayment.date}</Text>
        <Text>Amount Paid: MAD {lastPayment.amountPaid}</Text>
      </TouchableOpacity>

      {/* Water Consumption Graph */}
      <View style={styles.graphContainer}>
        <Text style={styles.graphTitle}>Water Consumption</Text>
        {Platform.OS !== 'web' && (
          <LineChart
            data={data} // Pass the data to the chart
            width={Dimensions.get("window").width}
            height={220}
            chartConfig={chartConfig}
          />
        )}
      </View>

      {/* Current Bill Total */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Water Bill</Text>
        <Text>Rate per Liter: MAD {ratePerLiter.toFixed(2)}</Text>
        <Text>Total Consumption: {currentTotal} liters</Text>
        <Text>Total Amount: MAD {currentBillTotal.toFixed(2)}</Text>
      </View>

      {/* AI Prediction Window */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => setCurrentScreen('AIPrediction')}
      >
        <Text style={styles.cardTitle}>AI Payment Prediction</Text>
        <Text>Click to view prediction for the next period</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  detailsContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  graphContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333333',
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666666',
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
