import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ActiveProvider, ZoomProvider } from "./Components/hooks";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <ZoomProvider>
    <ActiveProvider>
      <Router>
      <App />
      </Router>
    </ActiveProvider>
  </ZoomProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
