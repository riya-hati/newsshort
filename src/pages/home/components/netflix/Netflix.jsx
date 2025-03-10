import React, { useEffect, useState } from "react";
import MainLayout from "../../../../component/nav/layout/MainLayout";
import HeroSlider from "../heroSlider/HeroSlider";
import Skeleton from "../heroSlider/skeleton";
import "./netflix.scss";

const Netflix = () => {
	const [popularNews, setPopularNews] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getPopularNews();
	}, []);
	const getPopularNews = async () => {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.API_KEY}`
		);
		const jsonResponse = await response.json();
		setPopularNews(jsonResponse?.articles);
		setLoading(false);
	};
	return (
		<MainLayout>
			{loading ? <Skeleton /> : <HeroSlider popularNewsData={popularNews} />}
		</MainLayout>
	);
};

export default Netflix;
