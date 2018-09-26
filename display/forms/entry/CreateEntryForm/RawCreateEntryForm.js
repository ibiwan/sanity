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

  const labels = {
    date: "Date",
    description: "Description",
    amount: "Amount",
    source: "Source Account",
    destination: "Destination Account",
    repeatNum: "Repeat # Times",
    repeatUntil: "Repeat Until Date",
    repeatFreq: "Repeat Every # of",
    repeatUnit: "Interval Scale"
  };

  const inputProps = objmap(values, (o, k) => {
    console.log(k);
    return {
      ...others,
      error: touched[k] && errors[k],
      key: k,
      name: k,
      value: values[k],
      label: labels[k] || "needLabel: " + k
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
