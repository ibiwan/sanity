// Render Prop
import React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import Actions from "../../../../model/actions";
import { DatePicker } from "native-base";
import { FormikCreateEntryForm } from "./FormikCreateEntryForm";

console.log("ConnectedCreateEntryForm");

const mapStateToProps = state => ({
  templates: state.templates
});

const mapDispatchToProps = {
  createEntry: Actions.createEntry
  //   editEntry: Actions.editEntry,
  //   deleteEntry: Actions.deleteEntry
};

const CreateEntryForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikCreateEntryForm);

export { CreateEntryForm };
