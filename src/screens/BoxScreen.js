import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  // (always on parent element) alingItems: 'stretch', flexDirection: 'column', justifyContent: 'flex-start' by default
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    // flexDirection: 'row', // will now try to stretch vertically after applying 'height'
    //justifyContent: 'flex-start',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 4,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 4,
    // flex: 1, // caused 'Child 2' to expand and take up as much vertical space as it can (if applied 'flex: 1' everywhere, then it will make all boxes equal size)
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 2,
  },
});

export default BoxScreen;
