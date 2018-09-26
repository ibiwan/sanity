import React, { PureComponent } from "react";
import { View } from "react-native";
import {
  FormInput,
  FormValidationMessage,
  FormLabel
} from "react-native-elements";
import PropTypes from "prop-types";

import styles from "../styles";

export default class Input extends PureComponent {
  handleChange(value) {
    const { onChange, name } = this.props;
    onChange(name, value);
  }

  handleTouch() {
    const { onTouch, name } = this.props;
    onTouch(name);
  }

  render() {
    const {
      label,
      error,
      placeholder,
      component,
      reference,
      labelStyle,
      ...rest
    } = this.props;

    if (component) {
      return component;
    }

    return (
      <View style={styles.inputWrapper}>
        <FormLabel labelStyle={labelStyle}>{label}</FormLabel>
        <FormInput
          placeholder={placeholder}
          ref={reference}
          {...rest}
          onChangeText={v => this.handleChange(v)}
          onBlur={v => this.handleTouch(v)}
        />
        {error && <FormValidationMessage>{error}</FormValidationMessage>}
      </View>
    );
  }
}

Input.defaultProps = {
  label: null,
  error: null,
  placeholder: null,
  component: null,
  reference: null,
  onChange: null,
  name: null
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  component: PropTypes.node,
  reference: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string
};
