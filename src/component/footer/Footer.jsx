import React from "react";
import "./footer.scss";
import MainLayout from "../nav/layout/MainLayout";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<MainLayout>
			<div className="footer_container">
				<div className="footer_up">
					<img src="../assets/logo.png" alt="logo" className="logo_footer" />
					<ul>
						<li>
							<Facebook />
						</li>
						<li>
							<Linkedin />
						</li>
						<li>
							<Twitter />
						</li>
						<li>
							<Instagram />
						</li>
					</ul>
				</div>

				<div className="footer_down">
					<ul className="left_bar">
						<li>Privacy</li>
						<li>Policy</li>
					</ul>
					<ul className="right_bar">
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
		</MainLayout>
	);
};

export default Footer;
