import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, FlatList } from 'react-native';

const App = () => {
  const [masterSwitch, setMasterSwitch] = useState(false); // Master switch state
  const [taps, setTaps] = useState([
    { id: '1', name: 'Kitchen Tap', isOn: true },
    { id: '2', name: 'Bathroom Tap', isOn: false },
    { id: '3', name: 'Garden Tap', isOn: true },
  ]);

  // Synchronize master switch with individual taps
  useEffect(() => {
    const allTapsOff = taps.every((tap) => !tap.isOn);
    setMasterSwitch(allTapsOff); // Turn master switch on if all taps are off
  }, [taps]);

  // Toggle master switch
  const toggleMasterSwitch = () => {
    const newState = !masterSwitch; // Flip the master switch state
    setMasterSwitch(newState);

    // Update all taps based on the master switch state
    setTaps((prevTaps) =>
      prevTaps.map((tap) => ({
        ...tap,
        isOn: !newState, // Turn all taps off if master switch is on, otherwise turn them on
      }))
    );
  };

  // Toggle an individual tap
  const toggleTap = (id: string) => { // Type annotation for id
    setTaps((prevTaps) =>
      prevTaps.map((tap) =>
        tap.id === id
          ? { ...tap, isOn: !tap.isOn } // Flip the state of the selected tap
          : tap
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Tap Control</Text>

      {/* Master Switch */}
      <View style={[styles.tapContainer, styles.masterSwitchContainer]}>
        <Text style={styles.label}>Switch off all taps</Text>
        <Switch value={masterSwitch} onValueChange={toggleMasterSwitch} />
      </View>

      {/* List of Taps */}
      <FlatList
        data={taps}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tapContainer}>
            <Text style={styles.tapName}>{item.name}</Text>
            <Switch value={item.isOn} onValueChange={() => toggleTap(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 70,
    textAlign: 'center',
  },
  masterSwitchContainer: {
    backgroundColor: '#d0f0fd', // Light blue background color
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 18,
  },
  tapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tapName: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;