import React, { PureComponent } from "react";
import LabeledInput from "./LabeledInput";

export default class EmailInput extends PureComponent {
  render() {
    const { ...rest } = this.props;
    return <LabeledInput {...rest} />;
  }
}

EmailInput.defaultProps = {
  ...LabeledInput.defaultProps,
  autoCapitalize: "none",
  autoCorrect: false,
  blurOnSubmit: false,
  keyboardType: "email-address",
  returnKeyType: "next"
};

EmailInput.propTypes = {
  ...LabeledInput.propTypes
};
