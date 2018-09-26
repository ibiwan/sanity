// Render Prop
import React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import Actions from "../../../../model/actions";
import { DatePicker } from "native-base";
import { FormikCreateEntryForm } from "./FormikCreateEntryForm";
import { errlog } from "../../../../lib/debug";

errlog("In ConnectedCreateEntryForm", { FormikCreateEntryForm });

const mapStateToProps = state => ({
  templates: state.templates
});

const mapDispatchToProps = {
  createEntry: Actions.createEntry
  //   editEntry: Actions.editEntry,
  //   deleteEntry: Actions.deleteEntry
};

export const CreateEntryForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikCreateEntryForm);
