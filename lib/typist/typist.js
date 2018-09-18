import React from "react";

import * as yup from "yup";
import { Formik } from "formik";
import PropTypes from "prop-types";

import Basics from "./consts";
// import typeType from "./typeType";

function makeYup(typistType) {
  switch (typistType.type) {
    case Basics.OBJECT:
      const yupDef = {};
      // console.log("objcet", typistType);
      for (field in typistType.fields) {
        // console.log(field);
        const fieldDef = typistType.fields[field];
        var fieldValid = null;
        // console.log({ field, fieldDef });
        switch (fieldDef.type) {
          case Basics.STRING:
            fieldValid = yup.string();
            break;
          case Basics.NUMBER:
            fieldValid = yup.number();
            break;
          case Basics.INTEGER:
            fieldValid = yup.number().integer();
            break;
          case Basics.BOOLEAN:
            fieldValid = yup.bool();
            break;
          default:
            console.log("unhandled:", fieldDef.type);
            break;
        }
        if (fieldValid && fieldDef.required) {
          // console.log("REQUIRING ".field);
          fieldValid = fieldValid.required();
        }
        // console.log({ field, fieldValid });
        yupDef[field] = fieldValid;
      }
      if ("customValidation" in typistType) {
        // add yup.test
      }
      const yupSchema = yup.object().shape(yupDef);
      return yupSchema;
    case Basics.ARRAY:
      console.log("arrei");
      break;
    default:
      console.log("other::", typist.type);
      break;
  }
  return yupSchema;
}
function makePropTypes(type) {
  return { ob: PropTypes.object };
}
function makeFormik(type) {
  return <Formik />;
}

function makeDefaults(type) {
  return { default: "default" };
}

function validateType(type) {
  return true;
}

export default { makeYup, makePropTypes, makeFormik, makeDefaults };
