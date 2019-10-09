import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsLlist";

const SearchScreen = () => {
  const [term, setTerm] = useState(""),
    [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price =>
    results.filter(result => result.price === price);

  return (
    <>
      {/* <View style={{ flex: 1 }}> */}
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.textStyle}>{errorMessage}</Text>
      ) : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricer" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Bit Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: { textAlign: "center", color: "red" }
});

export default SearchScreen;
