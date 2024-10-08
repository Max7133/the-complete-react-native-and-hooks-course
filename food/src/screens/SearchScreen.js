import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  // price === '$' || '$$' || '$$$'
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      // for every 'result' inside of results Array it will ask if the
      return result.price === price; // if this is true, it will return this inside of the new 'results' Array
    });
  };
  console.log(results);
  return (
    // <></> - when return multiple grouping elements
    <>
      <SearchBar
        term={term}
        // onTermChange={(newTerm) => setTerm(newTerm)}
        onTermChange={setTerm}
        // onTermSubmit={() => searchApi()}
        // onTermSubmit={searchApi}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('€')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice('€€')} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice('€€€')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
