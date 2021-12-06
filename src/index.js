import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppProvider from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./firebase";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AppProvider auth={auth}>
				<App />
			</AppProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
