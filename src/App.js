import React from "react";
import "./App.css";
import Keyboard from "./components/Keyboard/index.jsx";
import Controller from "./components/Controller/index.jsx";

function App() {
	return (
		<div className="app">
			<Controller />
			<Keyboard />
		</div>
	);
}

export default App;
