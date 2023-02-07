import VideoItem from "components/VideoItem";
import NavBar from "layouts/NavBar";
import "./../styles/App.scss";
import { Outlet } from "react-router-dom";
import AccordianItem from "components/AccordianItem";

export default function App() {
	return (
		<div className="App">
			<NavBar />
			<Outlet />
		</div>
	);
}
