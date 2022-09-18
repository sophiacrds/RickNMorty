import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { NavRoutes } from "./services/routes";

export default function App() {
	return (
		<>
			<NavRoutes />
			<GlobalStyle />
		</>
	);
}
