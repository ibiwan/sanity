import React, { PureComponent, Fragment } from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import {
  FormInput,
  FormValidationMessage,
  FormLabel
} from "react-native-elements";
import PropTypes from "prop-types";
import DateTimePicker from "react-native-calendar-picker";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

import styles from "../styles";
import { errlog } from "../../../lib/debug";

export default class DateInput extends PureComponent {
  constructor() {
    super();
    this.state = { pickerVisible: false };
  }

  handleValueTouched() {
    this.showPicker();
  }

  handlePicked(date) {
    const { handleChange, name } = this.props;

    errlog(date.toString(), DAYS[date.weekday()]);
    this.hidePicker();
  }

  showPicker() {
    this.setState({ pickerVisible: true });
  }

  hidePicker() {
    this.setState({ pickerVisible: false });
  }

  render() {
    const { pickerVisible } = this.state;

    const { label, error, placeholder, labelStyle, ...rest } = this.props;

    return (
      <Fragment>
        <Modal visible={pickerVisible}>
          <DateTimePicker
            onDateChange={d => this.handlePicked(d)}
            onCancel={() => this.hidePicker()}
          />
        </Modal>

        <TouchableOpacity onPress={() => this.handleValueTouched()}>
          <FormLabel labelStyle={labelStyle}>{label}</FormLabel>
          <FormInput
            placeholder={placeholder}
            {...rest}
            pointerEvents={"none"}
          />
          {error && <FormValidationMessage>{error}</FormValidationMessage>}}
        </TouchableOpacity>
      </Fragment>
    );
  }
}

DateInput.defaultProps = {
  label: null,
  error: null,
  placeholder: null,
  component: null,
  reference: null,
  onChange: null,
  name: null
};

DateInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  component: PropTypes.node,
  reference: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string
};
