import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// NAV4
// import { withNavigation } from 'react-navigation'; // won't need to pass props from SearchScreen, and now can directly inject navigation in this component
// NAV 6
import { useNavigation } from '@react-navigation/native'; // won't need to pass props from SearchScreen, and now can directly inject navigation in this component
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
  // use of the useNavigation hook to access the navigation prop instead
  const navigation = useNavigation();
  // if there are no results e.g. in Big Spender category, then don't show anything not event the title
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        // { item } - is the 'result' of the business object that I'm fetching
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10, // more vertical space in the horizontal view
  },
});

// NAV 4
// export default withNavigation(ResultsList);
export default ResultsList;
