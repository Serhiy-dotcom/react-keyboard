import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles.js";

function Presets({ presetsArray, handleDeletePreset }) {
	return (
		<Styled.PresetsContainer>
			{presetsArray.map((preset, index) => (
				<Styled.PresetsItem key={preset.id}>
					Group {index + 1}
					<Styled.PresetsDelete
						onClick={() => handleDeletePreset(preset.id)}
					/>
				</Styled.PresetsItem>
			))}
		</Styled.PresetsContainer>
	);
}

Presets.propTypes = {
	presetsArray: PropTypes.array,
	handleDeletePreset: PropTypes.func,
};

export default Presets;
