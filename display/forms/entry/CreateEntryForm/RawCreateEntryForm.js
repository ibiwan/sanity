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

console.log("In RawCreateEntryForm");

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
      <Text>hihi</Text>
      <TextInput />
      <Button
        title="GO"
        onPress={() => {
          console.log("onPress pressed on");
        }}
      />
      <TextInput>bybye</TextInput>
      <Text>a</Text>
      <TextInput name="date" />
      <Text>a</Text>
      <TextInput name="description" />
      <Text>a</Text>
      <TextInput name="amount" />
      <Text>a</Text>
      <TextInput name="source" />
      <Text>a</Text>
      <TextInput name="destination" />
      <Text>a</Text>
      <View>
        <Text>a</Text>
        <TextInput name="repeatNum" />
        <Text>a</Text>
        <TextInput name="repeatUntil" />
        <Text>a</Text>
        <TextInput name="repeatFreq" />
        <Text>a</Text>
        <TextInput name="repeatUnit" />
        <Text>a</Text>
      </View>
      <Text>a</Text>
      <TextInput name="color" />
    </View>
  );
};
