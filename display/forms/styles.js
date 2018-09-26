import { StyleSheet } from "react-native";

// import { normalize } from "../../config/utility";

export default StyleSheet.create({
  inputWrapper: {
    width: "80%",
    alignSelf: "center"
  },
  formWrapper: {
    justifyContent: "center",
    width: "100%"
  },
  hidden: {
    flex: 0
  },
  button: {
    // marginTop: normalize(20),
    width: "60%",
    alignSelf: "center",
    backgroundColor: "#5c4"
    // borderRadius: normalize(7)
  },
  input: {
    color: "#f5f5f5",
    fontWeight: "normal",
    backgroundColor: "#222222DD",
    width: "100%",
    padding: 5
  },
  label: {
    color: "#f5f5f5",
    fontWeight: "bold",
    fontSize: 18
  }
});
