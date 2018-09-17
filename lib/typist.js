// import yup
// import proptypes
// import formik

// var yup = require('yup');
import React from "react";

import * as yup from "yup";
import { Formik } from "formik";
import PropTypes from "prop-types";

function makeYup(type) {
  return yup.object().shape({
    a: yup.string()
  });
}
function makePropTypes(type) {
  return { ob: PropTypes.object };
}
function makeFormik(type) {
  return <Formik />;
}

export { makeYup, makePropTypes, makeFormik };
