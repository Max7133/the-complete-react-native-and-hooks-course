import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 33 },
    { name: 'Friend 2', age: 24 },
    { name: 'Friend 3', age: 19 },
    { name: 'Friend 4', age: 27 },
    { name: 'Friend 5', age: 39 },
    { name: 'Friend 6', age: 36 },
    { name: 'Friend 7', age: 25 },
    { name: 'Friend 8', age: 26 },
    { name: 'Friend 9', age: 32 },
  ];

  // element === { item: { name: 'Friend 1' }, index: 0 }
  return (
    <FlatList
      // horizontal={true}
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}- Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
