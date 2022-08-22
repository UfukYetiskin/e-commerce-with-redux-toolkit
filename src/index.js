import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider> 
  </React.StrictMode>
);


// {/* */}