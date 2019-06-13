const tableReducer = (state = { tableData: null }, action) => {
	switch (action.type) {
		case 'GET_TABLE_ARRAY':
			return { ...state, tableData: action.payload };
		default:
		  return state;
	}
};

export default tableReducer;