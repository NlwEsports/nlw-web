import { createBrowserRouter } from "react-router-dom";
import HomeClient from "../../pages/client/Home.client";
import HomeMobile from "../../pages/mobile/Home.mobile";
import Page from "../../pages/page";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Page client={<HomeClient />} mobile={<HomeMobile />} />,
	},
	{
		path: "*",
		element: <>404</>,
	},
]);
