import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  // console.log("next state", store.getState());
  return result;
};

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, logger)
  );
}
