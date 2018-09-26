// Render Prop
import React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { Formik, Form, Field, withFormik } from "formik";
import Actions from "../../../../model/actions";
import { DatePicker } from "native-base";
import { RawCreateEntryForm } from "./RawCreateEntryForm";
import Typist from "../../../../lib/typist";
import { errlog } from "../../../../lib/debug";
import { EntryType, RepeatType } from "../../../../model/types";

errlog("In FormikCreateEntryForm", { RawCreateEntryForm });

const mapPropsToValues = props => {
  console.log({ "FormikCreateEntryForm props": props });
  const {
    date,
    description,
    amount,
    source,
    destination,
    repeat: { num, until, freq, unit } = {
      num: "inf",
      until: null,
      freq: 1,
      unit: "month"
    },
    color
  } = props;
  return {
    date: new Date(),
    description: description || "",
    amount: amount || 0.0,
    source: source || null,
    destination: destination || null,
    repeatNum: num || "inf",
    repeatUntil: until || null,
    repeatFreq: freq || 1,
    repeatUnit: unit || "month",
    color: color || "#666"
  };
};

const validationSchema = Typist.makeYup(EntryType);

const handleSubmit = (values, { resetForm, setErrors, setSubmitting }) => {
  console.log("injected state:", this.state);
  console.log("handling submit of:", values);
};

// console.log({ RawCreateEntryForm });

// // HOC form into formik context
export const FormikCreateEntryForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit
})(RawCreateEntryForm);
