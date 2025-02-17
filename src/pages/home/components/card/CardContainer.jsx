import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import MainLayout from "../../../../component/nav/layout/MainLayout";
import Card from "./Card";
import "./card.scss";
import Skeleton from "../../../../component/skeleton/Skeleton";
const CardContainer = () => {
	const [newsData, setNewsData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getNewsData();
	}, []);
	const getNewsData = async () => {
		try {
			const response = await fetch(
				`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${process.env.API_KEY}`
			);
			const jsonResponse = await response.json();
			setNewsData(jsonResponse?.articles);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
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
				{loading ? (
					<Skeleton />
				) : (
					<div className="container">
						{newsData?.map((item, index) => (
							<Card item={item} key={index} />
						))}
					</div>
				)}
			</MainLayout>
		</>
	);
};

export default CardContainer;
