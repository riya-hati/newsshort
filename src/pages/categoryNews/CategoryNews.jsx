import { useSearchParams } from "react-router-dom";
import "./categoryNews.scss";

import { useEffect, useState } from "react";
import MainLayout from "../../component/nav/layout/MainLayout";
import Card from "../home/components/card/Card";

const CategoryNews = () => {
	const [categoryNews, setCategoryNews] = useState([]);
	const [searchParams] = useSearchParams();
	const type = searchParams.get(`type`);
	useEffect(() => {
		getCategoryData();
		console.log("hello");
	}, [type]);
	const getCategoryData = async () => {
		try {
			const response = await fetch(
				`https://newsapi.org/v2/top-headlines?country=us&category=${type}&apiKey=${process.env.API_KEY}`
			);
			const toJson = await response.json();
			setCategoryNews(toJson.articles);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<MainLayout>
			<div className="container">
				{categoryNews?.map((item, index) => (
					<Card item={item} key={index} />
				))}
			</div>
		</MainLayout>
	);
};

export default CategoryNews;
