import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 18,
  },
});
