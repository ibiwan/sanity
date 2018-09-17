import { generateId } from "../../lib/random";
import repeatType from "./repeat";
import accountType from "./account";

export default {
  fields: {
    id: {
      type: "scalar.integer",
      required: true,
      default: () => generateId(),
      formLabel: false
    },
    date: {
      type: "jsObj.date",
      required: true,
      default: () => {
        new Date();
      },
      formLabel: "Start Date"
    },
    description: {
      type: "scalar.string",
      required: true,
      formLabel: "Description"
    },
    amount: {
      type: "scalar.number",
      required: false,
      formLabel: "Amount"
    },
    source: {
      type: accountType,
      required: false,
      formLabel: "Source Account"
    },
    destination: {
      type: accountType,
      required: false,
      formLabel: "Destination Account"
    },
    comment: {
      type: "scalar.string",
      required: false,
      formLabel: "Instance Comment"
    },
    repeat: {
      type: repeatType,
      required: true
    },
    seriesId: {
      type: "scalar.integer",
      required: true,
      formLabel: false
    },
    previousId: {
      type: "scalar.integer",
      required: false,
      formLabel: false
    },
    nextId: {
      type: "scalar.integer",
      required: false,
      formLabel: false
    },
    canceled: {
      type: "scalar.boolean",
      required: true,
      default: () => false,
      formLabel: "Cancel Instance"
    },
    completed: {
      type: "scalar.boolean",
      required: true,
      default: () => false,
      formLabel: "Completed"
    },
    resetBalance: {
      type: "scalar.boolean",
      required: true,
      default: () => false,
      formLabel: "Reset Balance"
    },
    rescheduledFor: {
      type: "jsObj.date",
      required: false,
      formLabel: "Reset Instance"
    },
    highlightColor: {
      type: "scalar.string",
      required: true,
      default: () => "#FFF",
      formLabel: "Highlight Color"
    }
  },
  customValidation: entry => {
    if (!("source" in entry) && !("destination" in entry)) {
      return "Either source or destination account must be specified.";
    }
    if (entry.source === entry.destination) {
      return "Source and destination accounts must differ.";
    }
    if (entry.repeat.currentIteration === 1 && seriesId != id) {
      return "Entry ID and Series ID must match for first iteration";
    }
    return true;
  }
};
