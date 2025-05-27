import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // 👈 FIXED
import { movieReducer } from "./MovieReducer";

export const movieStore = createStore(movieReducer, applyMiddleware(thunk));
