import React from "react";
import './App.scss';
import Main from "./pages/Main";
import { store} from "./store";
import { Provider } from "react-redux";

function App() {
  return (
      <Provider store={store}>
        <Main />
      </Provider>

  );
}

export default App;
