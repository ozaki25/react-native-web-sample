import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const Welcome = () => <Text style={styles.welcome}>Welcome to React Native!</Text>;

export default Welcome;
