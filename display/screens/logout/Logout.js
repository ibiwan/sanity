import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

class Logout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Logout Screen</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
