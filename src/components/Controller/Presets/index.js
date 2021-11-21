import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles.js";
import AdditionalInfo from "./AdditionalInfo/index.js";

function Presets({ presetsArray, handleDeletePreset, changeForPreset }) {
	return (
		<Styled.PresetsContainer>
			{presetsArray.map((preset, index) => (
				<>
					<Styled.PresetsItem key={preset.id}>
						<Styled.PresetsName
							onClick={() => changeForPreset(preset)}>
							Group {index + 1}
						</Styled.PresetsName>
						<Styled.PresetsDelete
							onClick={() => handleDeletePreset(preset.id)}
						/>
					</Styled.PresetsItem>
					<AdditionalInfo preset={preset} />
				</>
			))}
		</Styled.PresetsContainer>
	);
}

Presets.propTypes = {
	presetsArray: PropTypes.array,
	handleDeletePreset: PropTypes.func,
	changeForPreset: PropTypes.func,
};

export default Presets;
