import React, { useState, useEffect } from "react";
import * as Styled from "./styles";
import ColorPicker from "./ColorPicker/index.jsx";
import Presets from "./Presets/index.jsx";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

function Controller() {
	const localStorage = window.localStorage;
	const [presets, setPresets] = useState([]);
	const keysColors = useSelector(state => state);

	useEffect(() => {
		setPresets(JSON.parse(localStorage.getItem("presets")));
	}, []);

	useEffect(() => {
		localStorage.setItem("presets", JSON.stringify(presets));
	}, [presets]);

	useEffect(() => {
		if (presets.length !== 0) {
			setPresets(
				presets.map(preset =>
					preset.active
						? { ...preset, keysColors: keysColors }
						: preset
				)
			);
		}
	}, [keysColors]);

	const handleDeletePreset = deleteIndex => {
		setPresets(presets.filter(preset => preset.id !== deleteIndex));
	};

	const makePresetActive = activeIndex => {
		setPresets(
			presets.map(preset =>
				preset.id === activeIndex
					? { ...preset, active: true }
					: { ...preset, active: false }
			)
		);
	};

	return (
		<Styled.ControllerContainer>
			<Styled.ControllerTitle>Lightsync</Styled.ControllerTitle>
			<Styled.ControllerHr />
			<Styled.ControllerFlex>
				<Styled.ControllerSubTitle>
					Color Picker
				</Styled.ControllerSubTitle>

				<ColorPicker />
			</Styled.ControllerFlex>

			<Styled.ControllerHr />
			<Styled.ControllerFlex>
				<Styled.ControllerSubTitle>Presets</Styled.ControllerSubTitle>
				<Styled.ControllerAddPreset
					onClick={() =>
						setPresets([
							...presets.map(preset => ({
								...preset,
								active: false,
							})),
							{
								id: nanoid(),
								keysColors: keysColors,
								active: true,
							},
						])
					}
				/>
			</Styled.ControllerFlex>
			<Presets
				presetsArray={presets}
				handleDeletePreset={handleDeletePreset}
				makePresetActive={makePresetActive}
			/>
		</Styled.ControllerContainer>
	);
}

export default Controller;
