import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

class ListSortSelect extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ListSortSelect Modal</Text>
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
)(ListSortSelect);
