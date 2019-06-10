const exchangeRateReducer = (state = { exchangeRate: null }, action) => {
	switch (action.type) {
		case 'GET_EXCHANGE_RATE':
			return { ...state, exchangeRate: action.payload };
		default:
		  return state;
	}
};

export default exchangeRateReducer;