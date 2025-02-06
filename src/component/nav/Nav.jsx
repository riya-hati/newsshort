import { Link } from "react-router-dom";
import "./nav.scss";
import React from "react";
import MainLayout from "./layout/MainLayout";

const Nav = () => {
	return (
		<MainLayout>
			<nav className="nav_container">
				<Link to={"/"} >
				<img src="../assets/logo.png" alt="logo" className="logo" />
				</Link>
				
				<ul>
					<li>
						<Link to={"/category?type=business"}>Business</Link>
					</li>
					<li>
						<Link to={"/category?type=technology"}>Technology</Link>
					</li>
					<li>
						<Link to={"/category?type=politics"}>Politics</Link>
					</li>
					<li>
						<Link to={"/category?type=entertainment"}>Entertainment</Link>
					</li>
				</ul>
			</nav>
		</MainLayout>
	);
};

export default Nav;
