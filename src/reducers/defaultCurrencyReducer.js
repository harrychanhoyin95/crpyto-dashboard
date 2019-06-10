const defaultCurrencyReducer = (state = { defaultCurrency: 'USD' }, action) => {
	switch (action.type) {
		case 'SET_HKD':
			return { ...state, defaultCurrency: 'HKD' };
		case 'SET_USD':
			return { ...state, defaultCurrency: 'USD' };
		default:
		  return state;
	}
};

export default defaultCurrencyReducer;