import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  // (always on parent element) alingItems: 'stretch', flexDirection: 'column', justifyContent: 'flex-start' by default
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child 1</Text>
      <Text style={styles.textStyle}>Child 2</Text>
      <Text style={styles.textStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row', // will now try to stretch vertically after applying 'height'
    height: 200,
    justifyContent: 'flex-start',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default BoxScreen;
