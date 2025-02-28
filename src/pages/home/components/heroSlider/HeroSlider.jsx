import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./heroSlider.scss";
import { ShieldQuestion } from "lucide-react";
import PublishedTime from "../../../../component/PublishTime";
const HeroSlider = ({ popularNewsData }) => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty("--progress", 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	return (
		<Swiper
			spaceBetween={30}
			centeredSlides={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Autoplay, Navigation]}
			onAutoplayTimeLeft={onAutoplayTimeLeft}
			className="mySwiper"
		>
			{popularNewsData?.map((item, index) => (
				<SwiperSlide key={index}>
					<div className="netflix_section">
						<div className="left_box">
							<img src={item?.urlToImage} alt="images" />
						</div>
						<div className="Right_box">
							<p>{item?.author} </p>
							<p>
								<PublishedTime publishedAt={item?.publishedAt} />
							</p>
							<h3 className="line_clamp_2">{item?.title}</h3>
							<p className="line_clamp_3">{item?.description}</p>
							{/* <p>
								<span>Movies</span> • 4 min read
							</p> */}
						</div>
					</div>
				</SwiperSlide>
			))}

			<div className="autoplay-progress" slot="container-end">
				<svg viewBox="0 0 48 48" ref={progressCircle}>
					<circle cx="24" cy="24" r="20"></circle>
				</svg>
				<span ref={progressContent}></span>
			</div>
		</Swiper>
	);
};

export default HeroSlider;
