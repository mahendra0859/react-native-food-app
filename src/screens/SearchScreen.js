import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <Text style={styles.textStyle}>Serach Screen</Text>
      <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => console.log("Term submitted")} />
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { fontSize: 30, textAlign: "center" }
});

export default SearchScreen;
