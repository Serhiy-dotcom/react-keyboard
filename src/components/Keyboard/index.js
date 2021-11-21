import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./styles.js";

function Keyboard({ keysColors, makeActive }) {
	return (
		<Styled.KeyboardContainer>
			{keysColors.map((keysLine, index) => (
				<Styled.KeyboardLine
					key={index}
					gridColumns={keysLine.map((elem) =>
						elem.gridSize ? `${elem.gridSize}fr ` : "1fr "
					)}>
					{keysLine.map((keyCode) =>
						keyCode.key ? (
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
								onClick={() => makeActive(keyCode.id)}
								dangerouslySetInnerHTML={{
									__html: keyCode.key,
								}}></Styled.KeyboardKey>
						) : (
							<span key={keyCode.id}></span>
						)
					)}
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
