import { connect } from "react-redux";
import Actions from "../../../../model/actions";
import { FormikCreateEntryForm } from "./FormikCreateEntryForm";
import { errlog } from "../../../../lib/debug";

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
