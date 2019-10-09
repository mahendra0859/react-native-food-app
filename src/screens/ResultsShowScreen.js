import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import dummyData from "../data/data.json";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id"),
    [result, setResult] = useState(null);

  //   const getResult = async id => {
  //     try {
  //       const { data } = await yelp.get(`/${id}`);
  //       console.log("data", data);
  //       setResult(data);
  //     } catch (err) {
  //       console.log("err", err);
  // setResult({
  //   name: dummyData[0].name,
  //   photos: [
  //     dummyData[0].image_url,
  //     dummyData[1].image_url,
  //     dummyData[2].image_url
  //   ]
  // });
  //     }
  //   };
  //   useEffect(() => getResult(id), []);
  useEffect(
    () =>
      setResult({
        name: dummyData[0].name,
        photos: [
          dummyData[0].image_url,
          dummyData[1].image_url,
          dummyData[2].image_url
        ]
      }),
    []
  );
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
    width: 300
  }
});

export default ResultsShowScreen;
