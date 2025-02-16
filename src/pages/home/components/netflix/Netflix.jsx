import { ShieldQuestion } from "lucide-react";
import MainLayout from "../../../../component/nav/layout/MainLayout";
import "./netflix.scss";
import React, { useEffect, useState } from "react";
import HeroSlider from "../heroSlider/heroSlider";

const Netflix = () => {
	const [popularNews, setPopularNews] = useState([]);
	useEffect(() => {
		getPopularNews();
	}, []);
	const getPopularNews = async () => {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.API_KEY}`
		);
		const jsonResponse = await response.json();
		setPopularNews(jsonResponse?.articles);
	};
	console.log("riya", popularNews);

	return (
		<MainLayout>
			<HeroSlider popularNewsData={popularNews} />
		</MainLayout>
	);
};

export default Netflix;
