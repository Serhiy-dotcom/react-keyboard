import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles.js";
import { ChromePicker } from "react-color";

function ColorPicker({ handleApplyColors }) {
	const [keyColor, setKeyColor] = useState("#111");
	const [showPicker, setShowPicker] = useState(false);

	const handleApply = () => {
		setShowPicker(false);
		handleApplyColors(keyColor);
	};

	return (
		<Styled.ColorPickerContainer>
			<Styled.ColorPickerSwatch
				swatchColor={keyColor}
				onClick={() => setShowPicker(!showPicker)}
			/>
			{showPicker && (
				<Styled.ColorPicker>
					<ChromePicker
						width="100%"
						disableAlpha={true}
						color={keyColor}
						onChange={(color) => setKeyColor(color.hex)}
					/>
					<Styled.ColorPickerApplyBtn onClick={() => handleApply()}>
						Apply
					</Styled.ColorPickerApplyBtn>
				</Styled.ColorPicker>
			)}
		</Styled.ColorPickerContainer>
	);
}

ColorPicker.propTypes = {
	handleApplyColors: PropTypes.func,
};

export default ColorPicker;
