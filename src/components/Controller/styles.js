import styled from "styled-components";

export const ControllerContainer = styled.aside`
	width: 20vw;
	min-height: 100vh;
	background-color: #181818;
	padding: 5px 10px;
	margin-right: 30px;
`;

export const ControllerTitle = styled.h1`
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 5px;
	font-size: 30px;
	font-weight: 500;
`;

export const ControllerHr = styled.hr`
	background-color: #565656;
	border: 0;
	height: 1px;
	margin: 30px -10px;
`;

export const ControllerFlex = styled.article`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ControllerSubTitle = styled.h4`
	text-transform: uppercase;
	color: gray;
	letter-spacing: 2px;
	margin: 0;
`;

export const ControllerAddPreset = styled.div`
	display: inline-block;
	width: 35px;
	height: 35px;
	background: linear-gradient(#fff 0 0), linear-gradient(#fff 0 0);
	background-position: center;
	background-size: 50% 2px, 2px 50%;
	background-repeat: no-repeat;
	border-radius: 50%;
	cursor: pointer;
`;
