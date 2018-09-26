import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { View } from "react-native";
import {
  FormInput,
  FormValidationMessage,
  FormLabel
} from "react-native-elements";

import inputStyles from "../styles";

export default class Input extends PureComponent {
  render() {
    const {
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
    return (
      <View style={inputStyles.inputWrapper}>
        <FormLabel labelStyle={inputStyles.label}>{label}</FormLabel>
        <FormInput {...inputProps} name={name} style={inputStyles.input} />
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
