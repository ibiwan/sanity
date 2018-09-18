import { generateId } from "../../lib/random";
import repeatType from "./repeat";
import accountType from "./account";
import Typist from "../../lib/typist";

export default {
  type: Typist.OBJECT,
  fields: {
    id: {
      type: Typist.INTEGER,
      required: true,
      default: () => generateId(),
      formLabel: false
    },
    date: {
      type: Typist.DATE,
      required: true,
      default: () => {
        new Date();
      },
      formLabel: "Start Date"
    },
    description: {
      type: Typist.STRING,
      required: true,
      formLabel: "Description"
    },
    amount: {
      type: Typist.NUMBER,
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
      type: Typist.STRING,
      required: false,
      formLabel: "Instance Comment"
    },
    repeat: {
      type: repeatType,
      required: true
    },
    seriesId: {
      type: Typist.INTEGER,
      required: true,
      formLabel: false
    },
    previousId: {
      type: Typist.INTEGER,
      required: false,
      formLabel: false
    },
    nextId: {
      type: Typist.INTEGER,
      required: false,
      formLabel: false
    },
    canceled: {
      type: Typist.BOOLEAN,
      required: true,
      default: () => false,
      formLabel: "Cancel Instance"
    },
    completed: {
      type: Typist.BOOLEAN,
      required: true,
      default: () => false,
      formLabel: "Completed"
    },
    resetBalance: {
      type: Typist.BOOLEAN,
      required: true,
      default: () => false,
      formLabel: "Reset Balance"
    },
    rescheduledFor: {
      type: Typist.DATE,
      required: false,
      formLabel: "Reset Instance"
    },
    highlightColor: {
      type: Typist.STRING,
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
