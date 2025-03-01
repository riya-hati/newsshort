import { Link } from "react-router-dom";
import "./nav.scss";
import React, { useState } from "react";
import MainLayout from "./layout/MainLayout";
import { CircleX, Menu } from "lucide-react";

const Nav = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<MainLayout>
				<nav className="nav_container">
					<Link to={"/"}>
						<img src="../assets/logo.png" alt="logo" className="logo" />
					</Link>
					<Menu className="ham_barger" onClick={() => setOpen(true)} />
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

			{open && (
				<div className="sidebar_inner" onClick={() => setOpen(false)}>
					<div className="side_bar">
						<div className="wrapper">
							<Link to={"/"}>
								<img
									src="../assets/logo-white.png"
									alt="logo"
									className="logo-sidebar"
								/>
							</Link>
							<CircleX className="circle_icon" onClick={() => setOpen(false)} />
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
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Nav;
