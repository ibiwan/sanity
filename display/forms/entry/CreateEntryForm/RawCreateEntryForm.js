// Render Prop
import React, { Fragment } from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import Actions from "../../../../model/actions";
// import { DatePicker } from "native-base";
import { LabeledInput } from "../../Inputs";
import { objmap } from "../../../../lib/functional";
import { errlog, errlog_d } from "../../../../lib/debug";
import DateTimePicker from "react-native-modal-datetime-picker";


export const RawCreateEntryForm = props => {
  const { values, errors, touched, handleSubmit, ...others } = props;

  const showPicker = () => {
    errlog('show it')
    // this.setState({ pickerVisible: true });
  };
  
  const hidePicker = () => {
    errlog('hide it')
    // this.setState({ pickerVisible: false });
  };
  
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  
  const handlePicked = date => {
    // const { handleChange, name } = this.props;
    // handleChange(name)(date.toISOString().substring(0, 10));
    errlog([date.toString(), DAYS[date.getDay()]]);
    hidePicker();
  };
  
  const customs = {
    date: {
      label: "Date"
    },
    description: {
      label: "Description"
    },
    amount: {
      label       : "Amount",
      keyboardType: "numeric"
    },
    source: {
      label: "Source Account"
    },
    destination: {
      label: "Destination Account"
    },
    repeatNum: {
      label       : "Repeat # Times",
      keyboardType: "numeric"
    },
    repeatUntil: {
      label: "Repeat Until Date"
    },
    repeatFreq: {
      label       : "Repeat Every # of",
      keyboardType: "numeric"
    },
    repeatUnit: {
      label: "Interval Scale"
    },
    resetBalance: {
      label : "Reset Balance",
      hidden: true,
      value : false
    },
    completed: {
      label : "Completed",
      hidden: true,
      value : false
    }
  };

  const inputProps = objmap(values, (o, k) => {
    return {
      ...others,
      error: touched[k] && errors[k],
      key  : k,
      name : k,
      value: values[k],
      label: `needlabel: ${k}`,
      ...customs[k]
    };
  });

  const before = ["date", "description", "amount", "source", "destination"];
  const inside = ["repeatNum", "repeatUntil", "repeatFreq", "repeatUnit"];
  const after  = ["color"];

  const handle = date => {
    errlog({ date });
  };

  const pickerVisible = true;

  return (
    <Fragment>
      <DateTimePicker
        isVisible = {pickerVisible}
        onConfirm = {d => handlePicked(d)}
        onCancel  = {() => hidePicker()}
        ref       = {me => {
          this.inputRef = me;
        }}
      />
      {/* {before.map(field => (
        <LabeledInput {...inputProps[field]} />
      ))}
      <View style={{ backgroundColor: "#666" }}>
        {inside.map(field => (
          <LabeledInput {...inputProps[field]} />
        ))}
      </View>
      {after.map(field => (
        <LabeledInput {...inputProps[field]} />
      ))} */}
      <Button title="Create" onPress={handleSubmit} />
    </Fragment>
  );
};
