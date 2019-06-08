import { combineReducers } from "redux";

import authReducer from "./authReducer";
import cryptoReducer from "./cryptoReducer";

export default combineReducers({
	auth: authReducer,
	priceChart: cryptoReducer
});