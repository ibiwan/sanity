import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import entryType from "../../../model/types/entry";
import T from "../../../lib/typist";

class Intro extends React.Component {
  componentDidMount() {
    // console.log("T", T);
    // console.log(entryType);
    const yupper = T.makeYup(entryType);
    const { entries } = this.props;
    yupper
      .validate(entries[0])
      .then(a => console.log("valid", a))
      .catch(e => console.log("err", e));
    // console.log(T.makeFormik({}));
    // console.log(T.makePropTypes({}));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Intro Component</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state", state);
  return { entries: state.entries };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);
