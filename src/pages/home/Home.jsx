// import "./style.scss";
import Welcome from "./components/welcome/Welcome";
import Netflix from "./components/netflix/Netflix";
import CardContainer from "./components/card/CardContainer";
import Skeleton from "../../component/skeleton/skeleton";

const Home = () => {
	return (
		<>
			<Welcome />
			<Netflix />
			<CardContainer />
			<Skeleton />
		</>
	);
};

export default Home;
