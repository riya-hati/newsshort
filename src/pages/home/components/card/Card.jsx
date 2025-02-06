import React from "react";
import { Link } from "react-router-dom";
import PublishedTime from "../../../../component/PublishTime";

const Card = ({ item }) => {
	return (
		<div className="card">
			<img src={item?.urlToImage} alt="image" />
			<div className="content">
				<PublishedTime publishedAt={item?.publishedAt} />
				<div className="author">
					<p>
						{(item?.author?.slice(0, 30) || "No author available") +
							(item?.author?.length > 30 ? "..." : "")}
					</p>
				</div>
				<div className="title">
					<h1>
						{(item?.title?.slice(0, 40) || "No Title available") +
							(item?.title?.length > 40 ? "..." : "")}
					</h1>
				</div>
				<div className="description">
					<p>
						{(item?.description?.slice(0, 50) || "No description available") +
							(item?.description?.length > 50 ? "..." : "")}
						{/* {(item?.description?.slice(0, 50) ||
                        "No description available") +
                        (item?.description?.Length > 50 ? "..." : "")} */}
					</p>
				</div>
				<Link to={item?.url}>Read More</Link>
			</div>
		</div>
	);
};

export default Card;
