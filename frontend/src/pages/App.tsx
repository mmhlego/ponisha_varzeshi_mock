import NavBar from "layouts/NavBar";
import { Outlet } from "react-router-dom";
import "./../styles/App.scss";

export default function App() {
	return (
		<div className="App">
			<NavBar />
			<Outlet />
		</div>
	);
}
