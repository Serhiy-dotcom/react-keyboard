import React from "react";
import * as Styled from "./styles.js";
import { makeActive } from "../../redux/actions.js";
import { useSelector, useDispatch } from "react-redux";

function Keyboard() {
	const keysColors = useSelector(state => state);
	const dispatch = useDispatch();

	return (
		<Styled.KeyboardContainer>
			{keysColors.map((keysGroup, index) => (
				<React.Fragment key={index}>
					{keysGroup[0][0]?.logo === true ? (
						<Styled.KeyboardLogo
							key={keysGroup[0][0].id}
							inputColor={keysGroup[0][0].color}
							active={keysGroup[0][0].active}
							onClick={() =>
								dispatch(makeActive(keysGroup[0][0].id))
							}
						>
							{keysGroup[0][0].key}
						</Styled.KeyboardLogo>
					) : (
						<Styled.KeyboardGroup key={index}>
							{keysGroup.map((keysLine, index) => (
								<Styled.KeyboardLine
									key={index}
									gridColumns={keysLine.map(elem =>
										elem.gridSize
											? `${elem.gridSize}fr `
											: "1fr "
									)}
								>
									{keysLine.map(keyCode =>
										keyCode.key ? (
											<Styled.KeyboardKey
												key={keyCode.id}
												inputColor={keyCode.color}
												active={keyCode.active}
												onClick={() =>
													dispatch(
														makeActive(keyCode.id)
													)
												}
												dangerouslySetInnerHTML={{
													__html: keyCode.key,
												}}
											></Styled.KeyboardKey>
										) : (
											<span key={keyCode.id}></span>
										)
									)}
								</Styled.KeyboardLine>
							))}
						</Styled.KeyboardGroup>
					)}
				</React.Fragment>
			))}
		</Styled.KeyboardContainer>
	);
}

export default Keyboard;
