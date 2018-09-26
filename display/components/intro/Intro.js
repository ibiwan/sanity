import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import entryType from "../../../model/types/entry";
import T from "../../../lib/typist";
import Actions from "../../../model/actions";
import {
  ENTRY_EDIT_MODE_ALL_ENTRIES,
  ENTRY_EDIT_MODE_CURRENT_ENTRY_ONLY,
  ENTRY_EDIT_MODE_CURRENT_AND_FUTURE_ENTRIES
} from "../../../model/actions/actionTypes";
// import { CreateEntryForm } from "../../forms/entry";
// console.log(CreateEntryForm);
// import { ConnectedCreateEntryForm } from "../../forms/entry/CreateEntryForm/ConnectedCreateEntryForm";
import { LoginForm } from "../../forms/LoginForm";
// console.log(RawCreateEntryForm());
class Intro extends React.Component {
  componentDidMount() {
    const { entries } = this.props;
    // console.log(entries);
    // console.log(this.props);
    // console.log("T", T);
    // console.log(entryType);
    // const yupper = T.makeYup(entryType);
    // const { entries } = this.props;
    // yupper
    //   .validate(entries[0])
    //   .then(a => console.log("valid", a))
    //   .catch(e => console.log("err", e));
    // console.log(T.makeFormik({}));
    // console.log(T.makePropTypes({}));
    // this.props.
    // const {dispatch} =
    // const id = 52;
    // const { editEntry } = A;
    // console.log("e", editEntry);
    // console.log(this.props, "a", A, id);
    // console.log("want to dispatch");
    // this.props.editEntry(id, ENTRY_EDIT_MODE_CURRENT_AND_FUTURE_ENTRIES, {
    //   description: "halb"
    // });
    // this.props.editEntry(id, ENTRY_EDIT_MODE_CURRENT_ENTRY_ONLY, {
    //   description: "halb"
    // });
    // this.props.deleteEntry(id, ENTRY_EDIT_MODE_CURRENT_ENTRY_ONLY);
    // this.props.deleteEntry(id, ENTRY_EDIT_MODE_CURRENT_AND_FUTURE_ENTRIES);
    // this.props.deleteEntry(id, ENTRY_EDIT_MODE_ALL_ENTRIES);
    // console.log(entries);
  }

  render() {
    return <LoginForm />;
  }
}

const mapStateToProps = state => ({
  entries: state.entries
});

const mapDispatchToProps = {
  editEntry: Actions.editEntry,
  deleteEntry: Actions.deleteEntry
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);
