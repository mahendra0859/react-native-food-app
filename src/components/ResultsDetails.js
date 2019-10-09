import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.viewstyle}>
      <Image style={styles.imagestyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviewes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewstyle: { marginHorizontal: 10, maxWidth: 250 },
  imagestyle: {
    width: 250,
    height: 140,
    borderRadius: 4
  },
  nameStyle: { fontSize: 16, fontWeight: "bold" }
});

export default ResultsDetails;
