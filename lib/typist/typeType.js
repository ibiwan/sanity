import Typist from "../../lib/typist";
import TypistTypes from "../../lib/typist/consts";
import fieldType from "./fieldType";

export default {
  fields: {
    type: {
      type: Typist.STRING,
      options: TypistTypes,
      required: true
    },
    fields: {
      type: Typist.OBJECT,
      fields: {
        /* none required */
      },
      otherFields: {
        type: fieldType
      },
      required: false
    },
    elements: {
      type: fieldType,
      required: false
    },
    otherFields: {
      type: fieldType,
      required: false
    },
    customValidation: {
      type: Typist.FUNCTION,
      required: false,
      default: () => () => true
    }
  }
};
