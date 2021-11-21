import styled from "styled-components";

export const PresetsContainer = styled.ul`
	list-style: none;
	padding-left: 20px;
`;

export const PresetsItem = styled.li`
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-bottom: 15px;
	display: flex;
	align-items: center;
	cursor: context-menu;
`;

export const PresetsDelete = styled.span`
	width: 16px;
	height: 16px;
	opacity: 1;
	position: relative;
	cursor: pointer;
	margin-right: 10px;
	margin-right: 10px;
	margin-left: auto;

	&:before,
	&:after {
		position: absolute;
		content: " ";
		height: 100%;
		width: 1px;
		background-color: #fff;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	&:before {
		transform: rotate(45deg);
	}

	&:after {
		transform: rotate(-45deg);
	}
`;

export const PresetsName = styled.span`
	cursor: pointer;
`;
