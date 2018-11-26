import React from "react";
import { StyleSheet, View } from "react-native";
import Reactotron from "reactotron-react-native";
import CoponeyMobNav from "./CoponeyMobNav";
import "./ReactotronConfig";
import { Spinner } from "native-base";

import { Provider } from "react-redux";
import configureStore from "./configureStore";

Reactotron.log("Testando a conexão com o Reactotron.");

const store = configureStore();

export default class CoponeyMob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
    // setTimeout(() => this.setState({ isReady: true }), 5000);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={styles.loadingContainer}>
          <Spinner />
        </View>
      );
    } else {
      return (
        <Provider store={store}>
          <CoponeyMobNav />
        </Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
});
