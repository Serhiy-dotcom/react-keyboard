import styled from "styled-components";

export const ColorPickerContainer = styled.article`
	position: relative;
`;

export const ColorPickerSwatch = styled.div`
	border-radius: 50%;
	border: 4px solid #fff;
	height: 20px;
	width: 20px;
	background-color: ${(props) =>
		props.swatchColor ? props.swatchColor : "#111"};
`;

export const ColorPicker = styled.div`
	border-radius: 5px;
	border: 8px solid #fff;
	background-color: #fff;
	text-align: center;
	position: absolute;
	top: 100%;
	width: 300px;
	right: 0;
	z-index: 1;
`;

export const ColorPickerBtns = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

export const ColorPickerBtn = styled.button`
	background-color: #fff;
	padding: 5px 20px;
	color: #053be8;
	font-weight: bold;
	border: 1px solid #053be8;
	cursor: pointer;
	border-radius: 5px;
	font-size: 19px;
	margin: 20px 0 10px;
`;

export const ColorPickerApplyBtn = styled(ColorPickerBtn)`
	margin: 5px auto 10px;
`;

export const ColorPickerResetBtn = styled(ColorPickerBtn)``;

export const ColorPickerSelectAllBtn = styled(ColorPickerBtn)``;
