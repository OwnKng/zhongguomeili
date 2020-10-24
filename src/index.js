import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ActiveProvider, ZoomProvider } from "./Components/hooks";

ReactDOM.render(
  <ZoomProvider>
    <ActiveProvider>
      <App />
    </ActiveProvider>
  </ZoomProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
