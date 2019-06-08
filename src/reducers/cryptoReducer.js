const INITIAL_STATE = {
	currency: null,
	showTooltip: false,
	selectedCurrency: "BTC",
	datapoint: null
};

//setup selected currency tmr

export default ( state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case "FETCH_CURRENCY":
			return { ...state, currency: action.payload };
		case "SELECT_CURRENCY":
			return { ...state, selectedCurrency: action }
		case 'SHOW_TOOLTIP':
			return { ...state, showTooltip: true };
		case 'CLOSE_TOOLTIP':
			return { ...state, showTooltip: false };
		case 'GET_DATAPOINT':
			return { ...state, datapoint: action.payload }
		default: 
			return state
	}
};