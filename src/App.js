import React, { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard/index.js";
import Controller from "./components/Controller/index.js";
import { KEYS_DEFAULT_STATE } from "./utils/index.js";

function App() {
	const [keysColors, setKeysColors] = useState(KEYS_DEFAULT_STATE);
	console.log(KEYS_DEFAULT_STATE);

	const handleApplyColors = (color) => {
		let newArray = [];

		newArray = keysColors.map((keyLine) => {
			return keyLine.map((key) =>
				key.active ? { ...key, active: false, color: color } : key
			);
		});

		setKeysColors(newArray);
	};

	const makeActive = (id) => {
		let newArray = [];

		newArray = keysColors.map((keyLine) => {
			return keyLine.map((key) =>
				key.id === id ? { ...key, active: !key.active } : key
			);
		});

		setKeysColors(newArray);
	};

	return (
		<div className="app">
			<Controller
				handleApplyColors={handleApplyColors}
				keysColors={keysColors}
			/>
			<Keyboard keysColors={keysColors} makeActive={makeActive} />
		</div>
	);
}

export default App;
