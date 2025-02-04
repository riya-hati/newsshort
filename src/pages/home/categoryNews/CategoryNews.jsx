import { Link, useSearchParams } from "react-router-dom";
import "./categoryNews.scss";

import React, { useEffect, useState } from "react";

const CategoryNews = () => {
	const [categoryNews, setCategoryNews] = useState([]);
	const [searchParams] = useSearchParams();    
	const type = searchParams.get(`type`);
	useEffect(() => {
		getCategoryData();
		console.log("hello");
	}, [type]);
	const getCategoryData = async () => {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&category=${type}&apiKey=b6eeff707a1444cbbf11b12871b528de`
		);
		const toJson = await response.json();
		setCategoryNews(toJson.articles);
	};
	console.log(categoryNews);

	//   fetch(
	//     `https://newsapi.org/v2/top-headlines?country=us&category=${type}&apiKey=b6eeff707a1444cbbf11b12871b528de`
	//   );
	console.log(type);

	return (
		<div className="container">
			{categoryNews?.map((item, index) => (
				<div className="card" key={index}>
					<img src={item?.urlToImage} alt="image" />
					<div className="author">
						<h1>{item?.author}</h1>
					</div>
					<div className="title">
						<h3>{item?.title}</h3>
					</div>
					<Link to={item?.url}>
						<button>Read Full</button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default CategoryNews;
