// Render Prop
import React, { Fragment } from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import Actions from "../../../../model/actions";
// import { DatePicker } from "native-base";
import { LabeledInput } from "../../Inputs";
import { objmap } from "../../../../lib/functional";
import { errlog, errlog_d } from "../../../../lib/debug";

export const RawCreateEntryForm = props => {
  const { values, errors, touched, handleSubmit, ...others } = props;

  const customs = {
    date: {
      label: "Date"
    },
    description: {
      label: "Description"
    },
    amount: {
      label: "Amount",
      keyboardType: "numeric"
    },
    source: {
      label: "Source Account"
    },
    destination: {
      label: "Destination Account"
    },
    repeatNum: {
      label: "Repeat # Times",
      keyboardType: "numeric"
    },
    repeatUntil: {
      label: "Repeat Until Date"
    },
    repeatFreq: {
      label: "Repeat Every # of",
      keyboardType: "numeric"
    },
    repeatUnit: {
      label: "Interval Scale"
    }
  };

  const inputProps = objmap(values, (o, k) => {
    return {
      ...others,
      error: touched[k] && errors[k],
      key: k,
      name: k,
      value: values[k],
      label: `needlabel: ${k}`,
      ...customs[k]
    };
  });


  const before = ["date", "description", "amount", "source", "destination"];
  const inside = ["repeatNum", "repeatUntil", "repeatFreq", "repeatUnit"];
  const after = ["color"];

  return (
    <Fragment>
      {before.map(field => (
        <LabeledInput {...inputProps[field]} />
      ))}
      <View style={{ backgroundColor: "#666" }}>
        {inside.map(field => (
          <LabeledInput {...inputProps[field]} />
        ))}
      </View>
      {after.map(field => (
        <LabeledInput {...inputProps[field]} />
      ))}
      <Button title="Create" onPress={handleSubmit} />
    </Fragment>
  );
};
