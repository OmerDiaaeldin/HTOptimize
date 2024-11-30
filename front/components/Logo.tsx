import React from 'react';
import { Image, StyleSheet, ImageSourcePropType } from 'react-native';

const Logo: React.FC = () => {
  return <Image source={require('../assets/images/HTOptimize-removebg-preview.png')} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 250,
    marginTop:10,
  },
});

export default Logo;
