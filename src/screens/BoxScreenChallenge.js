import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreenChallenge = () => {
  // (always on parent element) alingItems: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', position: 'relative' by default
  // adding "alingSelf" on Child - overwrites "alignItems" on the Parent Element
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row', // will now try to stretch vertically after applying 'height'
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  viewTwoParent: {
    height: 100,
    justifyContent: 'flex-end',
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },
});

export default BoxScreenChallenge;
