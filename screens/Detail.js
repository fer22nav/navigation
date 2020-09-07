import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default DetailScreen = ({ navigation }) => {
  const body = navigation.getParam("body");
  const title = navigation.getParam("title");
  const userName = navigation.getParam("name");

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
  },
  title: {
    color: "#0099ff",
  },
  userName: {
    color: "#ff0000",
  },
});
