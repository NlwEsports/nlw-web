import { RouterProvider } from "react-router-dom";
import { router } from "./assets/start/routes";

function App() {
	return <RouterProvider router={router} />;
}

export default App;
