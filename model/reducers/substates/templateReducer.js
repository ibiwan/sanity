import initialState from "../initialState";
import {
  ADD_TEMPLATE,
  EDIT_TEMPLATE,
  DELETE_TEMPLATE,
  SELECT_DEFAULT_EXPENSE,
  SELECT_DEFAULT_INCOME
} from "../../actions/actionTypes";

export default function templates(state = initialState.templates, action) {
  switch (action.type) {
    case ADD_TEMPLATE:
      console.log("ADD_TEMPLATE Action");
      return {
        ...state,
        templates: { ...state.templates }
      };
    case EDIT_TEMPLATE:
      console.log("EDIT_TEMPLATE Action");
      return {
        ...state,
        templates: { ...state.templates }
      };
    case DELETE_TEMPLATE:
      console.log("DELETE_TEMPLATE Action");
      return {
        ...state,
        templates: { ...state.templates }
      };
    case SELECT_DEFAULT_EXPENSE:
      console.log("SELECT_DEFAULT_EXPENSE Action");
      return {
        ...state,
        templates: { ...state.templates }
      };
    case SELECT_DEFAULT_INCOME:
      console.log("SELECT_DEFAULT_INCOME Action");
      return {
        ...state,
        templates: { ...state.templates }
      };
    default:
      return state;
  }
}
