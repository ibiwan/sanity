export default {
  fields: {
    numIterations: {
      type: "scalar.integer",
      required: true,
      default: () => 1,
      formLabel: "Number of Iterations"
    },
    currentIteration: {
      type: "scalar.integer",
      required: true,
      default: () => 1,
      formLabel: false
    },
    repeatUntilDate: {
      type: "jsObj.date",
      required: true,
      formLabel: "Repeat Until"
    },
    frequencyNumber: {
      type: "scalar.integer",
      required: true,
      formLabel: "Repeat Every"
    },
    frequencyUnit: {
      type: "scalar.string",
      options: [
        "day",
        "days",
        "week",
        "weeks",
        "month",
        "months",
        "year",
        "years",
        "decade",
        "decades"
      ],
      required: true,
      formLabel: "Interval Size"
    }
  },
  customValidation: repeat => {
    if (repeat.numIterations < 0) {
      return "Number of Iterations must be nonnegative";
    }
    if (repeat.currentIteration > repeat.numIterations) {
      return "Went beyond defined number of iterations";
    }
    if (
      (repeat.numIterations > 1 || repeat.repeatUntilDate !== null) &&
      (repeat.frequencyNumber === null || repeat.frequencyUnit === null)
    ) {
      return "If multiple iterations or until-date are specified, frequency number and unit must be defined.";
    }
    if (repeat.frequencyNumber !== null && repeat.frequencyUnit === null) {
      return "If frequency number is specified, unit must be specified";
    }
    if (repeat.frequencyUnit !== null && repeat.frequencyNumber === null) {
      return "If frequency unit is specified, number must be specified";
    }
    return true;
  }
};
