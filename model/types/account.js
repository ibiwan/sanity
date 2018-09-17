export default {
  name: {
    type: "scalar.string",
    required: true,
    formLabel: "Account Name"
  },
  owned: {
    type: "scalar.boolean",
    required: true,
    default: () => true,
    formLabel: "User-Owned"
  }
};
