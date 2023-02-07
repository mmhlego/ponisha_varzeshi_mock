import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "pages/Error";
import VideoPage from "pages/VideoPage";
import CoachPage from "pages/CoachPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

//Create routes
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "videos",
				element: <VideoPage />,
			},
			{
				path: "coaches",
				element: <CoachPage />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
