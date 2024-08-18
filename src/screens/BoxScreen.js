import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  // (always on parent element) alingItems: 'stretch', flexDirection: 'column', justifyContent: 'flex-start' by default
  // adding "alingSelf" on Child - overwrites "alignItems" on the Parent Element
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
    alignItems: 'center', // Child 1 and 3 will center themselves, but Child 2 will remain on the right hand side, because it is set to alignSelf: 'flex-end'
    // flexDirection: 'row', // will now try to stretch vertically after applying 'height'
    //justifyContent: 'flex-start',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'flex-end',
    // flex: 1, // caused 'Child 2' to expand and take up as much vertical space as it can (if applied 'flex: 1' everywhere, then it will make all boxes equal size)
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default BoxScreen;
