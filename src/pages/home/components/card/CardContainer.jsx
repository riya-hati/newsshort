import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import MainLayout from "../../../../component/nav/layout/MainLayout";
import Card from "./card";
import "./card.scss";
const CardContainer = () => {
	const [newsData, setNewsData] = useState([]);
	useEffect(() => {
		getNewsData();
	}, []);
	const getNewsData = async () => {
		const response = await fetch(
			`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${process.env.API_KEY}`
		);
		const jsonResponse = await response.json();
		setNewsData(jsonResponse?.articles);
	};

	console.log(newsData);
	return (
		<>
			<MainLayout>
				<div className="news">
					<p>Latest News</p>
					<button className="btn">
						See all <MoveRight />
					</button>
				</div>

				<div className="container">
					{newsData?.map((item, index) => (
						<Card item={item} key={index} />
					))}
				</div>
			</MainLayout>
		</>
	);
};

export default CardContainer;
