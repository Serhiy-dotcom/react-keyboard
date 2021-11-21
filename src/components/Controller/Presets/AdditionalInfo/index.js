import React, { useEffect } from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles.js";
import { ColorPickerSwatch } from "../../ColorPicker/styles.js";
import { nanoid } from "nanoid";

function AdditionalInfo({ preset }) {
	let arrayOfColors = [];

	preset.keysColors.map((line) =>
		line.map((elem) => {
			if (elem.color) {
				if (arrayOfColors.length !== 0) {
					if (
						arrayOfColors.filter(
							(item) => item.color === elem.color
						).length !== 0
					) {
						arrayOfColors = arrayOfColors.map((item) =>
							item.color === elem.color
								? {
										...item,
										keysCount: item.keysCount + 1,
								  }
								: item
						);
					} else {
						arrayOfColors[arrayOfColors.length] = {
							color: elem.color,
							keysCount: 1,
						};
					}
				} else {
					arrayOfColors[0] = { color: elem.color, keysCount: 1 };
				}
			}
		})
	);

	return (
		<Styled.AdditionalInfoContainer>
			{arrayOfColors.map((elem) => (
				<Styled.AdditionalInfoItem key={nanoid()}>
					{`${elem.keysCount} keys`}
					<ColorPickerSwatch swatchColor={elem.color} />
				</Styled.AdditionalInfoItem>
			))}
		</Styled.AdditionalInfoContainer>
	);
}

AdditionalInfo.propTypes = {
	preset: PropTypes.object,
};

export default AdditionalInfo;
