import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null); // the data object has not been fetched iniitially
  // NAV4
  // const id = navigation.getParam('id');
  // NAV 6
  const id = route.params.id;

  // fetches 1 restaurant that I clicked
  // id - id of restaurant to retrive
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  // if there is no 'result' yet, then return null until it gets some result
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        // item - actual photo string (actual URL of the photo that I'm trying to show)
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
