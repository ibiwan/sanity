import initialState from "../initialState";
import {
  LOG_IN,
  LOG_OUT,
  CREATE_USER,
  EDIT_USERNAME,
  CHANGE_PASSWORD
} from "../../actions/actionTypes";

export default function user(state = initialState.user, action) {
  switch (action.type) {
    case LOG_IN:
      console.log("LOG_IN Action");
      return {
        ...state,
        user: { ...state.user }
      };
    case LOG_OUT:
      console.log("LOG_OUT Action");
      return {
        ...state,
        user: { ...state.user }
      };
    case CREATE_USER:
      console.log("CREATE_USER Action");
      return {
        ...state,
        user: { ...state.user }
      };
    case EDIT_USERNAME:
      console.log("EDIT_USERNAME Action");
      return {
        ...state,
        user: { ...state.user }
      };
    case CHANGE_PASSWORD:
      console.log("CHANGE_PASSWORD Action");
      return {
        ...state,
        user: { ...state.user }
      };
    default:
      return state;
  }
}
