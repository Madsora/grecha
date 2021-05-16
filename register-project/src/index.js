import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/authProvider";
import { RecordsContextProvider } from "./store/recordsProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <RecordsContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </RecordsContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
