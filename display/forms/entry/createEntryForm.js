// Render Prop
import React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import Actions from "../../../model/actions";

const CreateEntryForm = props => {
  const { templates } = props;
  console.log({ templates });
  const initialValues = {
    date: new Date(),
    description: "",
    amount: 0.0,
    source: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {props => (
        <View>
          <Text>hi</Text>
          <TextInput
            onChangeText={props.handleChange("email")}
            onBlur={props.handleBlur("email")}
            value={props.values.email}
          />
          <Button onPress={props.handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};
//     <View>
//       <Text>Any place in your app!</Text>
//       <Formik
//         initialValues={initialValues}
//         validate={values => {
//           let errors = {};
//           if (!values.email) {
//             errors.email = "Required";
//           } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//             errors.email = "Invalid email address";
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({ errors, touched, isSubmitting }) => (
//           <Form>
//             <Field type="email" name="email" />
//             {errors.email && touched.email && errors.email}
//             <Field type="password" name="password" />
//             {errors.password && touched.password && errors.password}
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </View>
//   );
// };

const mapStateToProps = state => ({
  templates: state.templates
});

const mapDispatchToProps = {
  createEntry: Actions.createEntry
  //   editEntry: Actions.editEntry,
  //   deleteEntry: Actions.deleteEntry
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEntryForm);
