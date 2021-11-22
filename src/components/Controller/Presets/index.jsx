import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles.js";
import AdditionalInfo from "./AdditionalInfo/index.jsx";
import { setPreset } from "../../../redux/actions.js";
import { useDispatch } from "react-redux";

function Presets({ presetsArray, handleDeletePreset, makePresetActive }) {
	const dispatch = useDispatch();

	const handleCheckPreset = preset => {
		makePresetActive(preset.id);
		dispatch(setPreset(preset));
	};

	return (
		<Styled.PresetsContainer>
			{presetsArray.map((preset, index) => (
				<React.Fragment key={preset.id}>
					<Styled.PresetsItem>
						<Styled.PresetsName
							active={preset?.active}
							onClick={() => handleCheckPreset(preset)}
						>
							Group {index + 1}
						</Styled.PresetsName>
						<Styled.PresetsDelete
							onClick={() => handleDeletePreset(preset.id)}
						/>
					</Styled.PresetsItem>
					<AdditionalInfo preset={preset} />
				</React.Fragment>
			))}
		</Styled.PresetsContainer>
	);
}

Presets.propTypes = {
	presetsArray: PropTypes.array,
	handleDeletePreset: PropTypes.func,
	makePresetActive: PropTypes.func,
};

export default Presets;
