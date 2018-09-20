import * as accountActions from "./substates/accountActions";
import * as entryActions from "./substates/entryActions";
import * as ledgerActions from "./substates/ledgerActions";
import * as listActions from "./substates/listActions";
import * as userActions from "./substates/userActions";
import * as templateActions from "./substates/templateActions";

const allActions = {
  ...accountActions,
  ...entryActions,
  ...ledgerActions,
  ...listActions,
  ...userActions,
  ...templateActions
};

// console.log({ allActions });

export default allActions;
