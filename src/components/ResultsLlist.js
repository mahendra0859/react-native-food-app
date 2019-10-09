import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";

import ResultsDetails from "./ResultsDetails";

const ResultsList = ({ title, results, navigation }) => {
  const { navigate } = navigation;
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={result => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigate("ResultsShow", { id: item.id })}
          >
            <ResultsDetails result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: { marginHorizontal: 10, marginVertical: 15 },
  titleStyle: { fontSize: 18, fontWeight: "bold" }
});

export default withNavigation(ResultsList);
