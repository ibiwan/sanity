import React, { Component, View } from "react";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import EmailInput from "./Inputs/EmailInput";
import PasswordInput from "./Inputs/PasswordInput";
import styles from "./styles";
// import * as LoginActions from "../../actions/Login/LoginActions";
// import { emailSchema } from "../../validation";

// import { ViewWithWrapper } from "../View";

const InnerForm = props => {
  const { values, errors, touched, handleSubmit, ...others } = props;

  let passwordInputRef;

  const emailProps = {
    ...others,
    error: touched.username && errors.username,
    label: "Email Address",
    name: "username",
    value: values.username
  };
  const passwordProps = {
    ...others,
    error: touched.password && errors.password,
    label: "Password",
    name: "password",
    ref: me => {
      passwordInputRef = me;
    },
    value: values.password
  };
  return (
    <React.Fragment>
      <EmailInput {...emailProps} />
      <PasswordInput {...passwordProps} />
      <Button
        buttonStyle={styles.button}
        title="Log In"
        onPress={handleSubmit}
      />
    </React.Fragment>
  );
};

class LoginForm extends Component {
  handleSubmit({ username, password }) {
    const { loginFormSubmit } = this.props;
    console.log("login form submit clicked");
    console.log({
      username,
      password,
      loginFormSubmit
    });
    loginFormSubmit(username, password);
  }

  render() {
    return (
      // <ViewWithWrapper
      //   style={{
      //     justifyContent: "center",
      //     width: "100%"
      //   }}
      // >
      <Formik
        initialValues={{ username: null, password: null }}
        onSubmit={v => this.handleSubmit(v)}
        // validationSchema={emailSchema}
        render={props => <InnerForm {...props} />}
      />
      // </ViewWithWrapper>
    );
  }
}

const mapDispatchToProps = {
  // loginFormSubmit: LoginActions.loginFormSubmit
};

const mapStateToProps = () => ({});

LoginForm.propTypes = {
  loginFormSubmit: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(LoginForm));
