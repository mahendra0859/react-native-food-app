import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        horizontal
        keyExtractor={result => result.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: { fontSize: 18, fontWeight: "bold" }
});

export default ResultsList;
