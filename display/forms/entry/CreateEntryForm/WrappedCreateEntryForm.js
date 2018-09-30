import { withFormik } from "formik";
import { connect } from "react-redux";

import { EntryType, RepeatType } from "../../../../model/types";
import Actions from "../../../../model/actions";
import Typist from "../../../../lib/typist";
import { errlog } from "../../../../lib/debug";

import { RawCreateEntryForm } from "./RawCreateEntryForm";

const mapPropsToValues = props => {
  const {
    date,
    description,
    amount,
    source,
    destination,
    repeat,
    color
  } = props;

  return {
    date: (date || new Date()).toISOString().substring(0, 10),
    description: description || "",
    amount: amount || "0.0",
    source: source || null,
    destination: destination || null,
    repeatNum: (repeat && repeat.num) || "inf",
    repeatUntil: (repeat && repeat.until) || null,
    repeatFreq: (repeat && repeat.freq) || "1",
    repeatUnit: (repeat && repeat.unit) || "month",
    color: color || "#666"
  };
};

const validationSchema = Typist.makeYup(EntryType);

const handleSubmit = (values, { resetForm, setErrors, setSubmitting }) => {
  console.log("injected state:", this.state);
  console.log("handling submit of:", values);
};

// HOC form into formik context
const FormikCreateEntryForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit
})(RawCreateEntryForm);

const mapStateToProps = state => ({
  templates: state.templates
});

const mapDispatchToProps = {
  createEntry: Actions.createEntry
  //   editEntry: Actions.editEntry,
  //   deleteEntry: Actions.deleteEntry
};

export const CreateEntryForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikCreateEntryForm);
