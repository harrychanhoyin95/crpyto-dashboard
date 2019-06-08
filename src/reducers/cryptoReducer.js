const INITIAL_STATE = {
	currency: null,
	showTooltip: false,
	datapoint: null,
};

//setup selected currency tmr

export default ( state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case "FETCH_BITCOIN":
			return { ...state, currency: action.payload };
		case "FETCH_ETHEREUM":
			return { ...state, currency: action.payload };
		case "FETCH_BITCOIN_CASH":
			return { ...state, currency: action.payload };
		case 'SHOW_TOOLTIP':
			return { ...state, showTooltip: true };
		case 'CLOSE_TOOLTIP':
			return { ...state, showTooltip: false };
		case 'GET_DATAPOINT':
			return { ...state, datapoint: action.payload };
		default: 
			return state
	}
};