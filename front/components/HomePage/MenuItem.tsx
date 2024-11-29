import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MenuItemProps {
  title: string;
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    backgroundColor: '#5194c2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '48%',
  },
  menuText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default MenuItem;
