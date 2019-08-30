import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import MenuButton from "./../../components/MenuButton/MenuButton";
import { Container } from "native-base";
import { theme } from "../../config/_theme";

// const { width: WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  allCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.backgroundMain
  },
  text: {
    fontSize: 30,
    color: theme.palette.txtPrimary
  }
});

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.allCont}>
          <Text style={styles.text}>Settings</Text>
        </View>
      </Container>
    );
  }
}

export default Settings;
