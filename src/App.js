import React, { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard/index.js";
import Controller from "./components/Controller/index.js";
import { KEYS_DEFAULT_STATE } from "./utils/index.js";

function App() {
	const [keysColors, setKeysColors] = useState(KEYS_DEFAULT_STATE);

	const handleApplyColors = (color) => {
		let newArray = [];
		newArray = keysColors.map((keysGroups) => {
			return keysGroups.map((keyLine) => {
				return keyLine.map((key) =>
					key.active ? { ...key, active: false, color: color } : key
				);
			});
		});
		setKeysColors(newArray);
	};

	const handleReset = () => {
		setKeysColors(
			keysColors.map((keysGroups) =>
				keysGroups.map((line) =>
					line.map((elem) => ({ ...elem, color: "", active: false }))
				)
			)
		);
	};

	const handleSelectAll = () => {
		setKeysColors(
			keysColors.map((keysGroups) =>
				keysGroups.map((line) =>
					line.map((elem) => ({ ...elem, active: true }))
				)
			)
		);
	};

	const makeActive = (id) => {
		let newArray = [];
		newArray = keysColors.map((keysGroups) =>
			keysGroups.map((keyLine) => {
				return keyLine.map((key) =>
					key.id === id ? { ...key, active: !key.active } : key
				);
			})
		);
		setKeysColors(newArray);
	};

	const changeForPreset = (preset) => {
		setKeysColors(preset.keysColors);
	};

	return (
		<div className="app">
			<Controller
				handleApplyColors={handleApplyColors}
				keysColors={keysColors}
				changeForPreset={changeForPreset}
				handleReset={handleReset}
				handleSelectAll={handleSelectAll}
			/>
			<Keyboard keysColors={keysColors} makeActive={makeActive} />
		</div>
	);
}

export default App;
