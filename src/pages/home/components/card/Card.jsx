import React, { useEffect, useState } from "react";
import MainLayout from "../../../../component/nav/layout/MainLayout";
import "./card.scss";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
const Card = () => {
	const [newsData, setNewsData] = useState([]);
	useEffect(() => {
		getNewsData();
	}, []);
	const getNewsData = async () => {
		const response = await fetch(
			"https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=b6eeff707a1444cbbf11b12871b528de"
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
						<div className="card" key={index}>
							<img src={item?.urlToImage} alt="image" />
							<div className="content">
								<div className="author">
									<h1>
										{(item?.author?.slice(0, 20) || "No author available") +
											(item?.author?.length > 20 ? "..." : "")}
									</h1>
								</div>
								<div className="title">
									<h3>
										{(item?.title?.slice(0, 30) || "No Title available") +
											(item?.title?.length > 30 ? "..." : "")}
									</h3>
								</div>
								<div className="description">
									<p>
										{(item?.description?.slice(0, 50) ||
											"No description available") +
											(item?.description?.Length > 50 ? "..." : "")}
									</p>
								</div>
								<Link to={item?.url}>
									<button className="btn_name">Read Full</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</MainLayout>
		</>
	);
};

export default Card;
