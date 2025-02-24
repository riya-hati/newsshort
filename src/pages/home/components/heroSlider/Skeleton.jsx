import React from "react";
import "./skeleton.scss";

const Skeleton = () => {
	return (
		<div className="slider_skeleton_container">
			<div className="left"></div>
			<div className="right">
				<div className="right_sub"></div>
				<div className="right_sub"></div>
			</div>
            </div>
	);
};

export default Skeleton;
