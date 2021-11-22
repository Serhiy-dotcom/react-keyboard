import { createStore } from "redux";
import { keysReducer } from "./reducers";

export const store = createStore(keysReducer);
