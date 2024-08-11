import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Max';

  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text style={{ fontSize: 20 }}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default ComponentsScreen;
