import React from "react";
import configureStore from "./model/store/configureStore";
import { Provider } from "react-redux";
import { Intro } from "./display/screens/intro";
import { errlog } from "./lib/debug";

errlog(Intro);

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Intro />
      </Provider>
    );
  }
}
