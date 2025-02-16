// import "./style.scss";
import CardContainer from "./components/card/CardContainer";
import Netflix from "./components/netflix/Netflix";
import Welcome from "./components/welcome/Welcome";

const Home = () => {
	return (
		<>
			<Welcome />
			<Netflix />
			<CardContainer />
		</>
	);
};

export default Home;
