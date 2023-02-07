import CoachPage from "pages/CoachPage";
import Error from "pages/Error";
import VideoPage from "pages/VideoPage";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import App from "./pages/App";
import "./styles/index.scss";

const queryClient = new QueryClient();

// Create routes
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "/videos",
				element: <VideoPage />,
			},
			{
				path: "/coaches",
				element: <CoachPage />,
			},
			{
				path: "/",
				element: <Navigate to="/videos" />,
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
