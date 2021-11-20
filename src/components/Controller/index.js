import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles";
import ColorPicker from "./ColorPicker/index.js";
import Presets from "./Presets/index.js";
import { nanoid } from "nanoid";

function Controller({ handleApplyColors, keysColors }) {
	const [presets, setPresets] = useState([]);

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

				<ColorPicker handleApplyColors={handleApplyColors} />
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
			/>
		</Styled.ControllerContainer>
	);
}

Controller.propTypes = {
	keysColors: PropTypes.array,
	handleApplyColors: PropTypes.func,
};

export default Controller;
