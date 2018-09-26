// Render Prop
import React from "react";
import { Text, View, Button, TextInput, Form } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import { connect } from "react-redux";
import Actions from "../../../../model/actions";
import { DatePicker } from "native-base";

console.log("RawCreateEntryForm");

export const RawCreateEntryForm = props => {
  // console.log("RawCreateEntryForm props", props);
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    initialValues,
    touched,
    values,
    isSubmitting,
    ...moreProps
  } = props;
  // console.log({ moreProps });
  return (
    <View>
      <TextInput />
      <Button
        title="GO"
        onPress={() => {
          console.log("onPress pressed on");
        }}
      />
      {/* <Text>a</Text>
      <Field name="date" />
      <Text>a</Text>
      <Field name="description" />
      <Text>a</Text>
      <Field name="amount" />
      <Text>a</Text>
      <Field name="source" />
      <Text>a</Text>
      <Field name="destination" />
      <Text>a</Text>
      <View>
        <Text>a</Text>
        <Field name="repeatNum" />
        <Text>a</Text>
        <Field name="repeatUntil" />
        <Text>a</Text>
        <Field name="repeatFreq" />
        <Text>a</Text>
        <Field name="repeatUnit" />
        <Text>a</Text>
      </View>
      <Text>a</Text>
      <Field name="color" /> */}
    </View>
  );
};
