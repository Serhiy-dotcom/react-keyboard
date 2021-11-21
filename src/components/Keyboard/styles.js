import styled from "styled-components";

//background-color: #44454c;

export const KeyboardContainer = styled.section`
	background-color: #262424;
	max-width: 1400px;
	margin: 0 auto;
	width: fit-content;
	padding: 30px;
	border-radius: 5px;
	height: fit-content;
`;

export const KeyboardLine = styled.article`
	display: grid;
	grid-template-columns: ${(props) => props.gridColumns};
`;

export const KeyboardKey = styled.button`
	min-width: 50px;
	font-size: 1.25rem;
	line-height: 1.5;
	margin: 0.375rem 0.375rem 0.875rem;
	padding: 0.5rem 1rem;
	box-shadow: 0 0 #7e7e7e, 0 0px #7e7e7e, 0 1px #7e7e7e, 0 2px #7e7e7e,
		0 3px #7e7e7e, 0 4px #7e7e7e, 0 5px #7e7e7e, 0 6px #7e7e7e,
		0 7px #7e7e7e, 0 8px #7e7e7e;
	background-color: #353535;
	color: ${(props) => (props.inputColor ? props.inputColor : "#f3f3f3")};
	cursor: pointer;
	backface-visibility: hidden;
	border: 1px solid #4e4c4c;
	border-radius: 0.25rem;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	transform: translate3d(0, 0, 5px);
	transform-style: preserve-3d;
	transition: all 0.25s cubic-bezier(0.2, 1, 0.2, 1);

	text-shadow: ${(props) =>
		props.inputColor && !props.active
			? `0 0 10px ${props.inputColor}, 0 0 20px ${props.inputColor}, 0 0 40px ${props.inputColor}, 0 0 80px ${props.inputColor},
	0 0 100px ${props.inputColor}, 0 0 120px ${props.inputColor}, 0 0 140px ${props.inputColor}`
			: `0 0 10px none, 0 0 20px none, 0 0 40px none, 0 0 80px none,
	0 0 100px none`};

	${(props) =>
		props.active &&
		`color: #111;
	background: #fff;
	box-shadow: 0 0 50px #fff;`}

	&:focus {
		outline: none;
	}

	&:after {
		content: "";
		border-style: solid;
		box-sizing: content-box;
		display: block;
		position: absolute;
		transform-style: preserve-3d;
		border-radius: 0.5rem;
		border-color: #989696;
		transform: translate3d(0, 0, -8px);
		bottom: -13px;
		left: -0.375rem;
		right: -0.375rem;
		top: 3px;
		border-width: 0.125rem;
		transition: all 0.25s cubic-bezier(0.2, 1, 0.2, 1);
	}

	&:active {
		background-color: #5a5a5a;
		box-shadow: 0 0 1px 1px #b3b3b3;
		color: #f3f3f3;
		border-color: transparent;
		box-shadow: none;
		transform: translate3d(0, 8px, 0);
	}

	&:active:after {
		transform: translate3d(0, -8px, 0);
		border-color: #989696;
	}
`;
