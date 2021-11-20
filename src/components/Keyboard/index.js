import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles.js";

function Keyboard({ keysColors, makeActive }) {
	return (
		<Styled.KeyboardContainer>
			{keysColors.map((keysLine, index) => (
				<Styled.KeyboardLine key={index}>
					{keysLine.map((keyCode) => (
						<Styled.KeyboardKey
							key={keyCode.id}
							inputColor={keyCode.color}
							active={keyCode.active}
							paddingMult={
								keyCode.id === 57
									? 6
									: keyCode.id === 42 || keyCode.id === 53
									? 1.5
									: ""
							}
							onClick={() => makeActive(keyCode.id)}>
							{keyCode.key}
						</Styled.KeyboardKey>
					))}
				</Styled.KeyboardLine>
			))}
		</Styled.KeyboardContainer>
	);
}

Keyboard.propTypes = {
	keysColors: PropTypes.array,
	makeActive: PropTypes.func,
};

export default Keyboard;
