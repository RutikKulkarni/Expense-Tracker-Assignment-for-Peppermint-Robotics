import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { snackbarGenerator } from "./utils/snackbarGenerator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider
    maxSnack={3}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
  >
    <snackbarGenerator.SnackbarUtilsConfigurator />
    <App />
  </SnackbarProvider>
);
