import Typist from "../../lib/typist";

export default {
  type: Typist.OBJECT,
  fields: {
    type: {
      type: [Typist.STRING, Typist.CUSTOM, Typist.ARRAY],
      elements: {
        type: [Typist.STRING, Typist.CUSTOM]
      }
    },
    options: {
      type: Typist.ARRAY,
      elements: {
        type: Typist.STRING
      },
      required: false
    },
    required: {
      type: Typist.BOOLEAN,
      required: true
    },
    default: {
      type: [Typist.NULL, Typist.FUNCTION],
      required: true
    },
    formLabel: {
      type: Typist.STRING,
      required: false
    }
  }
};
