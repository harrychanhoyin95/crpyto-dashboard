import React from "react";
import { BrowserRouter } from "react-router-dom";

import MiniDrawer from "./MiniDrawer";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<MiniDrawer />
			</BrowserRouter>	  
		</div>
	);
}

export default App;