import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null),
    id = navigation.getParam("id"),
    getResult = async id => {
      const { data } = await yelp.get(`/${id}`);
      setResult(data);
    };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  } else {
    return (
      <View>
        <Text style={styles.textStyle}>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.imageStyle} />
          )}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  textStyle: { fontSize: 30, textAlign: "center" },
  imageStyle: {
    height: 200,
    width: 300,
    margin: 5
  }
});

export default ResultsShowScreen;
