import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Cards from "../components/Cards";

export const NavRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/carac" element={<Cards />} />
			</Routes>
		</Router>
	);
};
