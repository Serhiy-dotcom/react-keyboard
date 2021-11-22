import React, { useState } from "react";
import * as Styled from "./styles.js";
import { ChromePicker } from "react-color";
import { applyColors, resetAll, selectAll } from "../../../redux/actions.js";
import { useDispatch } from "react-redux";

function ColorPicker() {
	const dispatch = useDispatch();
	const [keyColor, setKeyColor] = useState("#111");
	const [showPicker, setShowPicker] = useState(false);

	const handleApply = () => {
		setShowPicker(false);
		dispatch(applyColors(keyColor));
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
					<Styled.ColorPickerBtns>
						<Styled.ColorPickerResetBtn
							onClick={() => dispatch(resetAll())}>
							Reset All
						</Styled.ColorPickerResetBtn>
						<Styled.ColorPickerSelectAllBtn
							onClick={() => dispatch(selectAll())}>
							Select All
						</Styled.ColorPickerSelectAllBtn>
						<Styled.ColorPickerApplyBtn
							onClick={() => handleApply()}>
							Apply
						</Styled.ColorPickerApplyBtn>
					</Styled.ColorPickerBtns>
				</Styled.ColorPicker>
			)}
		</Styled.ColorPickerContainer>
	);
}

export default ColorPicker;
