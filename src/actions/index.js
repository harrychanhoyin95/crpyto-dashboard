import crpyto from '../components/apis/crypto';

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

export const getCurrency = () => async dispatch => {
	const isoDate = new Date().toISOString();
	const newTime = isoDate.replace(/([.])\w+/g, "");

	const response = await crpyto.get(`/v1/ohlcv/BTC/USD/history?period_id=1HRS&time_end=${newTime}&limit=24`);
	
	dispatch({ type: 'FETCH_CURRENCY', payload: response.data })
};

export const selectCurrecny = () => {
	return {
		type: "SELECT_CURRENCY"
	};
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