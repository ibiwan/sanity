import Typist from "../../lib/typist";

export default {
  name: {
    type: Typist.STRING,
    required: true,
    formLabel: "Account Name"
  },
  owned: {
    type: Typist.BOOLEAN,
    required: true,
    default: () => true,
    formLabel: "User-Owned"
  }
};
