import { combineReducers } from "redux";

import authReducer from "./authReducer";
import cryptoReducer from "./cryptoReducer";
import defaultCurrenyReducer from "./defaultCurrencyReducer";
import exchangeDateReducer from './exchangeRateReducer'
import tableReducer from './tableReducer';
import newsReducer from './newsReducer';

export default combineReducers({
	auth: authReducer,
	priceChart: cryptoReducer,
	settings: defaultCurrenyReducer,
	exchangeData: exchangeDateReducer,
	table: tableReducer,
	newsData: newsReducer
});