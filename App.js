import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UsersScreen from "./screens/Users";
import PostsScreen from "./screens/Posts";
import DetailScreen from "./screens/Detail";

const AppNavigator = createStackNavigator(
  {
    Users: {
      screen: UsersScreen,
    },
    Posts: {
      screen: PostsScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: "Users",
  }
);

export default createAppContainer(AppNavigator);
