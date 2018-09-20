import initialState from "../initialState";
import {
  ADD_ACCOUNT,
  RENAME_ACCOUNT,
  DELETE_UNUSED_ACCOUNT
} from "../../actions/actionTypes";

export default function accounts(state = initialState.accounts, action) {
  switch (action.type) {
    case ADD_ACCOUNT:
      console.log("ADD_ACCOUNT Action");
      return {
        ...state,
        accounts: [...accounts, action.data]
      };
    case RENAME_ACCOUNT:
      console.log("RENAME_ACCOUNT Action");
      return (newState = {
        ...accounts,
        accounts: accountsWithRename(state, action.data)
      });
    case DELETE_UNUSED_ACCOUNT:
      console.log("DELETE_UNUSED_ACCOUNT Action");
      return {
        ...accounts,
        accounts: accountsWithout(state, action.data)
      };
    default:
      return state;
  }
}

function accountsWithRename(state, { id, name }) {
  return state.accounts.map(
    acct => (acct.id === id ? { ...acct, name: name } : acct)
  );
}

function accountsWithout(state, { id }) {
  return state.accounts.filter(acct => acct.id !== id);
}
