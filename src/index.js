import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { SnackbarProvider } from "notistack";
import { snackbarGenerator } from "./utils/snackbarGenerator";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
    <snackbarGenerator.SnackbarUtilsConfigurator />
    <App />
    </SnackbarProvider>
//   {/* </React.StrictMode> */}
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./styles/index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
