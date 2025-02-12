import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./component/nav/Nav";
import CategoryNews from "./pages/categoryNews/CategoryNews";
import Footer from "./component/footer/Footer";

const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/category" element={<CategoryNews />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
