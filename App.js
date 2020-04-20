import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> textInComponent </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
