import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { View, Text } from "react-native";
import {
  FormInput,
  FormValidationMessage,
  FormLabel
} from "react-native-elements";
import DateInput from "./DateInput";

import inputStyles from "../styles";
import { errlog } from "../../../lib/debug";

export default class Input extends PureComponent {
  render() {
    const {
      type,
      name,
      label,
      error,
      handleBlur,
      handleChange,
      ...passedProps
    } = this.props;

    const inputProps = {
      name,
      placeholder: label,
      onBlur: handleBlur(name),
      onChangeText: handleChange(name),
      ...passedProps
    };

    let Input;
    switch (type) {
      case "date":
        Input = DateInput;
        break;
      default:
        Input = FormInput;
        break;
    }

    return (
      <View style={inputStyles.inputWrapper}>
        <FormLabel labelStyle={inputStyles.label}>{label}</FormLabel>
        <Input {...inputProps} name={name} style={inputStyles.input} />
        {error && <FormValidationMessage>{error}</FormValidationMessage>}
      </View>
    );
  }
}

Input.defaultProps = {
  ...FormInput.defaultProps,
  label: null,
  error: null
};

Input.propTypes = {
  ...FormInput.propTypes,
  label: PropTypes.string,
  error: PropTypes.string
};
