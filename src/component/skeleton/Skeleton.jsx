import React from "react";
import "./skeleton.scss";
import MainLayout from "../nav/layout/MainLayout";
const Skeleton = () => {
	return (
		<MainLayout>
			<div className="skeleton_container">
				{[...Array(12)].map((ClipboardItem, index) => (
					<div className="skeleton_card" key={index}>
						<div className="skeleton_img"></div>
						<div className="skeleton_title"></div>
						<div className="skeleton_title"></div>
						<div className="skeleton_title"></div>
					</div>
				))}
			</div>
		</MainLayout>
	);
};

export default Skeleton;
