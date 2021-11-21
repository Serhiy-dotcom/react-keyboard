import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles";
import ColorPicker from "./ColorPicker/index.js";
import Presets from "./Presets/index.js";
import { nanoid } from "nanoid";

function Controller({
	handleApplyColors,
	keysColors,
	changeForPreset,
	handleReset,
	handleSelectAll,
}) {
	const localStorage = window.localStorage;
	const [presets, setPresets] = useState([]);

	useEffect(() => {
		setPresets(JSON.parse(localStorage.getItem("presets")));
	}, []);

	useEffect(() => {
		localStorage.setItem("presets", JSON.stringify(presets));
	}, [presets]);

	const handleDeletePreset = (deleteIndex) => {
		setPresets(presets.filter((preset) => preset.id !== deleteIndex));
	};

	return (
		<Styled.ControllerContainer>
			<Styled.ControllerTitle>Lightsync</Styled.ControllerTitle>
			<Styled.ControllerHr />
			<Styled.ControllerFlex>
				<Styled.ControllerSubTitle>
					Color Picker
				</Styled.ControllerSubTitle>

				<ColorPicker
					handleApplyColors={handleApplyColors}
					handleReset={handleReset}
					handleSelectAll={handleSelectAll}
				/>
			</Styled.ControllerFlex>

			<Styled.ControllerHr />
			<Styled.ControllerFlex>
				<Styled.ControllerSubTitle>Presets</Styled.ControllerSubTitle>
				<Styled.ControllerAddPreset
					onClick={() =>
						setPresets([
							...presets,
							{ id: nanoid(), keysColors: keysColors },
						])
					}
				/>
			</Styled.ControllerFlex>
			<Presets
				presetsArray={presets}
				handleDeletePreset={handleDeletePreset}
				changeForPreset={changeForPreset}
			/>
		</Styled.ControllerContainer>
	);
}

Controller.propTypes = {
	keysColors: PropTypes.array,
	handleApplyColors: PropTypes.func,
	changeForPreset: PropTypes.func,
	handleReset: PropTypes.func,
	handleSelectAll: PropTypes.func,
};

export default Controller;
