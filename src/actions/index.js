import crpyto from '../components/apis/crypto';
import exchangeRate from '../components/apis/exchangeRate';

export const signIn = () => {
	return {
		type: 'SIGN_IN'
	};
};

export const signOut = () => {
	return {
		type: 'SIGN_OUT'
	};
};

export const getBitcoin = () => async dispatch => {
	const isoDate = new Date().toISOString();
	const newTime = isoDate.replace(/([.])\w+/g, "");

	const response = await crpyto.get(`/v1/ohlcv/BTC/USD/history?period_id=1HRS&time_end=${newTime}&limit=24`);
	
	dispatch({ type: 'FETCH_BITCOIN', payload: response.data })
};

export const getEthereum = () => async dispatch => {
	const isoDate = new Date().toISOString();
	const newTime = isoDate.replace(/([.])\w+/g, "");

	const response = await crpyto.get(`/v1/ohlcv/ETH/USD/history?period_id=1HRS&time_end=${newTime}&limit=24`);
	
	dispatch({ type: 'FETCH_ETHEREUM', payload: response.data })
};

export const getBitcoinCash = () => async dispatch => {
	const isoDate = new Date().toISOString();
	const newTime = isoDate.replace(/([.])\w+/g, "");

	const response = await crpyto.get(`/v1/ohlcv/BTH/USD/history?period_id=1HRS&time_end=${newTime}&limit=24`);
	
	dispatch({ type: 'FETCH_BITCOIN_CASH', payload: response.data })
};

export const showTooltip = () => {
	return {
		type: 'SHOW_TOOLTIP'
	};
};

export const closeTooltip = () => {
	return {
		type: "CLOSE_TOOLTIP"
	};
};

export const getDatapoint = (datapoint) => {
	return {
		type: "GET_DATAPOINT",
		payload: datapoint
	};
};

export const getExchangeRate = () => async dispatch => {
	const apiKey = '2a0cfbcaf9a179566ac5';
	const response = await exchangeRate.get(`/api/v7/convert?q=USD_HKD,HKD_USD&compact=ultra&apiKey=${apiKey}`);

	dispatch({ type: 'GET_EXCHANGE_RATE', payload: response.data })
}

export const setUSD = () => {
	return {
		type: "SET_USD"
	};
};

export const setHKD = () => {
	return {
		type: "SET_HKD"
	};
};