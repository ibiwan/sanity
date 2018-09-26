const FormikCreateEntryForm = props => {
  const { templates, handleBlur, handleChange, handleSubmit } = props;

  function setDate(newDate) {
    console.log(newDate);
  }

  function changed(data) {
    console.log(arguments);
  }

  // console.log("param props", props, "object props", this.props);

  console.log({ templates });

  const initialValues = {
    date: new Date(),
    description: "",
    amount: 0.0,
    source: ""
  };

  // console.log(props.handleChange("email"));

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {props => (
        <View>
          <Text>Date</Text>
          <DatePicker name="date" onDateChange={changed} />
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={props.values.email}
          />
          <Button onPress={props.handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};
