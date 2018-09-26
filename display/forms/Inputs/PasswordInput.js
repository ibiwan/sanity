import React, { PureComponent } from "react";
import LabeledInput from "./LabeledInput";

export default class PasswordInput extends PureComponent {
  render() {
    return <LabeledInput {...this.props} />;
  }
}

PasswordInput.defaultProps = {
  ...LabeledInput.defaultProps,
  autoCapitalize: "none",
  autoCorrect: false,
  secureTextEntry: true
};

PasswordInput.propTypes = {
  ...LabeledInput.propTypes
};
