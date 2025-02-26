import { ShieldQuestion } from "lucide-react";
import MainLayout from "../../../../component/nav/layout/MainLayout";
import "./netflix.scss";
import React, { useEffect, useState } from "react";
import HeroSlider from "../heroSlider/heroSlider";
import Skeleton from "../heroSlider/skeleton";

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
