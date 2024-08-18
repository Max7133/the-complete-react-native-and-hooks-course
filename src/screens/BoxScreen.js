import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  // (always on parent element) alingItems: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', position: 'relative' by default
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
    // alignItems: 'center', // Child 1 and 3 will center themselves, but Child 2 will remain on the right hand side, because it is set to alignSelf: 'flex-end'
    // flexDirection: 'row', // will now try to stretch vertically after applying 'height'
    // justifyContent: 'flex-start',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 18,
    ...StyleSheet.absoluteFillObject, // same as top,right,bottom,left: 0 + position: 'absolute'
    // position: 'absolute', // + with top,right,bottom and left set to 0, as a result, will ignore the boundries of Child 1 and 3 elements and will completely expand and fill up the Parent Element
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    // top: 10, // shifted down and now will cause Child 2 to overlap Child 3
    // alignSelf: 'flex-end',
    // flex: 1, // caused 'Child 2' to expand and take up as much vertical space as it can (if applied 'flex: 1' everywhere, then it will make all boxes equal size)
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default BoxScreen;
