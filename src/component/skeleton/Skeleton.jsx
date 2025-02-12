import React from "react";
import "./skeleton.scss";
import MainLayout from "../nav/layout/MainLayout";

const Skeleton = () => {
	return (
		<MainLayout>
			<div className="skeleton_container">
				<div className="skeleton_card">
					<div className="skeleton_img"></div>
					<div className="skeleton_title"></div>
					<div className="skeleton_para"></div>
					<div className="skeleton_desc"></div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Skeleton;
