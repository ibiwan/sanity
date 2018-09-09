import initialState from "../initialState";
import { ADD_ENTRY, EDIT_ENTRY, DELETE_ENTRY } from "../../actions/actionTypes";

export default function entries(state = initialState.entries, action) {
  switch (action.type) {
    case ADD_ENTRY:
      console.log("ADD_ENTRY Action");
      return {
        ...state,
        entries: [...entries, action.data]
      };
    case EDIT_ENTRY:
      console.log("EDIT_ENTRY Action");
      return (newState = {
        ...state,
        entries: entriesWithChange(state, action.data)
      });
    case DELETE_ENTRY:
      console.log("DELETE_ENTRY Action");
      return {
        ...state,
        entries: entriesWithout(state, action.data)
      };
    default:
      return state;
  }
}

function entriesWithChange(state, { id, mode, data }) {
  return state.entries;
}

function entriesWithout(state, { id, mode }) {
  return state.entries;
}
