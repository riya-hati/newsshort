// import "./style.scss";
import Welcome from "./components/welcome/Welcome";
import Netflix from "./components/netflix/Netflix";
import Card from "./components/card/card";

// https://newsapi.org/v2/everything?q=tesla&from=2024-12-28&sortBy=publishedAt&apiKey=b6eeff707a1444cbbf11b12871b528de

const Home = () => {
	return (
		<>
			<Welcome />
			<Netflix />
			<Card />
		</>
	);
};

export default Home;
