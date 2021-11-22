import {
	APPLY_COLORS,
	RESET_ALL,
	SELECT_ALL,
	MAKE_ACTIVE,
	SET_PRESET,
} from "./actionTypes.js";

export const applyColors = (color) => {
	return {
		type: APPLY_COLORS,
		payload: {
			color,
		},
	};
};

export const resetAll = () => {
	return {
		type: RESET_ALL,
	};
};

export const selectAll = () => {
	return {
		type: SELECT_ALL,
	};
};

export const makeActive = (id) => {
	return {
		type: MAKE_ACTIVE,
		payload: {
			id,
		},
	};
};

export const setPreset = (preset) => {
	return {
		type: SET_PRESET,
		payload: {
			preset,
		},
	};
};
