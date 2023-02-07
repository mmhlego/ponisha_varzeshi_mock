import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "pages/Error";
import Video from "pages/Video";
import Coach from "pages/Coach";

//Create routes
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "videos",
				element: <Video />,
			},
			{
				path: "coaches",
				element: <Coach />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
