import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";

import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState(''),
    [results, setResults] = useState([]),
    [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', { params: { limit: 50, term, location: 'san jose' } });
      setResults(response.data.businesses);
    } catch (err) { setErrorMessage('Something went wrong!!') }
  }
  return (
    <View>
      <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={searchApi} />
      {errorMessage ? <Text style={styles.textStyle}>{errorMessage}</Text> : null}
      <Text>Result length {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { textAlign: "center", color: 'red' }
});

export default SearchScreen;
