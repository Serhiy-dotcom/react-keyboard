import {
	APPLY_COLORS,
	RESET_ALL,
	SELECT_ALL,
	MAKE_ACTIVE,
	SET_PRESET,
} from "./actionTypes.js";
import { KEYS_DEFAULT_STATE } from "../utils/index.js";

export const keysReducer = (state = KEYS_DEFAULT_STATE, action) => {
	switch (action.type) {
		case APPLY_COLORS:
			return state.map(keysGroups => {
				return keysGroups.map(keyLine => {
					return keyLine.map(key =>
						key.active
							? {
									...key,
									active: false,
									color: action.payload.color,
							  }
							: key
					);
				});
			});
		case RESET_ALL:
			return state.map(keysGroups =>
				keysGroups.map(line =>
					line.map(elem => ({ ...elem, color: "", active: false }))
				)
			);
		case SELECT_ALL:
			return state.map(keysGroups =>
				keysGroups.map(line =>
					line.map(elem => ({ ...elem, active: true }))
				)
			);
		case MAKE_ACTIVE:
			return state.map(keysGroups =>
				keysGroups.map(keyLine => {
					return keyLine.map(key =>
						key.id === action.payload.id
							? { ...key, active: !key.active }
							: key
					);
				})
			);
		case SET_PRESET:
			return action.payload.preset.keysColors;
		default:
			return state;
	}
};
