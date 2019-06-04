const INTIAL_STATE = {
	drawerOpened: false
};

const drawerReducer = ( state = INTIAL_STATE, action ) => {
	switch (action.type) {
		case "OPEN_DRAWER":
			return { ...state, drawerOpened: true };
		case "CLOSE_DRAWER":
			return { ...state, drawerOpened: false };
		default:
		  return state;
	}
};

export default drawerReducer;