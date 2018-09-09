import { combineReducers } from "redux";
import entries from "./substates/entryReducer";
import accounts from "./substates/accountReducer";
import templates from "./substates/templateReducer";
import users from "./substates/userReducer";
import date from "./substates/dateReducer";
import ledger from "./substates/ledgerReducer";

const rootReducer = combineReducers({
  entries,
  accounts,
  templates,
  users,
  date,
  ledger
});

export default rootReducer;
