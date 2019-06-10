import { combineReducers } from "redux";

import authReducer from "./authReducer";
import cryptoReducer from "./cryptoReducer";
import defaultCurrenyReducer from "./defaultCurrencyReducer";
import exchangeDateReducer from './exchangeRateReducer'

export default combineReducers({
	auth: authReducer,
	priceChart: cryptoReducer,
	settings: defaultCurrenyReducer,
	exchangeData: exchangeDateReducer
});