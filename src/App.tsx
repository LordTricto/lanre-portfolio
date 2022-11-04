import "./App.css";

import AppRouter from "./routes/AppRouter";
import React from "react";

function App(): JSX.Element {
	return (
		<div className="bg-white-dark w-full min-h-screen">
			<AppRouter />;
		</div>
	);
}

export default App;
