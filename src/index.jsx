import React from "react";
import ReactDOM from "react-dom";
import Routes from "./components/router.jsx";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Routes />
        </MuiThemeProvider>
    </BrowserRouter>, 
    document.getElementById("container"));