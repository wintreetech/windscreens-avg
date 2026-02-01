import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";

// optional pages
import Home from "./pages/Home";
import TradeAccount from "./pages/TradeAccount";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import WindscreenChipRepairs from "./pages/services/WindscreenChipRepairs";
import WindscreenReplacements from "./pages/services/WindscreenReplacements";
import ADASCalibrations from "./pages/services/ADASCalibrations";
import BodyglassReplacements from "./pages/services/BodyglassReplacements";
import WingMirrorReplacements from "./pages/services/WingMirrorReplacements";
import Faqs from "./pages/Faqs";
import WhoWeAre from "./pages/WhoWeAre";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },

			{ path: "login", element: <Login /> },
			{
				path: "services/windscreen-chip-repairs",
				element: <WindscreenChipRepairs />,
			},
			{
				path: "services/windscreen-replacements",
				element: <WindscreenReplacements />,
			},
			{
				path: "services/adas-calibrations",
				element: <ADASCalibrations />,
			},
			{
				path: "services/bodyglass-replacements",
				element: <BodyglassReplacements />,
			},
			{
				path: "services/wing-mirror-replacements",
				element: <WingMirrorReplacements />,
			},
			{ path: "trade-account", element: <TradeAccount /> },

			{
				path: "/faqs",
				element: <Faqs />,
			},
			{
				path: "/who-we-are",
				element: <WhoWeAre />,
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
