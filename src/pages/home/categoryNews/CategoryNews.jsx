import { Link, useSearchParams } from "react-router-dom";
import "./categoryNews.scss";

import React, { useEffect, useState } from "react";
import Card from "../components/card/card";
import MainLayout from "../../../component/nav/layout/MainLayout";

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
		<MainLayout >
		<div className="container">
			{categoryNews?.map((item, index) => (
				<Card item={item} key={index} />
			))}
		</div>
		</MainLayout>
	);
};

export default CategoryNews;
