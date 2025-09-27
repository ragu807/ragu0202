// Storeredux.js
import { initialState } from "./Reducer";
import { reducer } from "./Reducer";
import { createStore } from "redux";

export const store = createStore(reducer, initialState);
