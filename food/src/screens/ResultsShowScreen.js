import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); // the data object has not been fetched iniitially
  const id = navigation.getParam('id');

  console.log(result);

  // fetches 1 restaurant that I clicked
  // id - id of restaurant to retrive
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
