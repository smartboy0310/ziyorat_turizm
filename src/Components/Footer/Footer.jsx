import React from 'react';
import './Footer.css';

import Map from '../Map/Map';
import { Link } from 'react-router-dom';
import logoImg from '../../Assets/Images/logo.jpg';

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<section className="social-media">
					<div className="map">
						<Map />
					</div>
					<div className="social-media-wrap">
						<div className="footer-logo">
							<Link to="/" className="social-logo">
								<img
									src={logoImg}
									alt="logo"
									className="logo-img"
									width={60}
									height={60}
								/>
							</Link>
						</div>
						<small className="website-rights">TRVL © 2022</small>
						<div className="social-icons">
							<Link
								className="social-icon-link facebook"
								to="/"
								target="_blank"
								aria-label="Facebook"
							>
								<i className="fab fa-facebook-f" />
							</Link>
							<Link
								className="social-icon-link instagram"
								to="/"
								target="_blank"
								aria-label="Instagram"
							>
								<i className="fab fa-instagram" />
							</Link>
							<Link
								className="social-icon-link youtube"
								to="/"
								target="_blank"
								aria-label="Youtube"
							>
								<i className="fab fa-youtube" />
							</Link>
							<Link
								className="social-icon-link twitter"
								to="/"
								target="_blank"
								aria-label="Twitter"
							>
								<i className="fab fa-twitter" />
							</Link>
							<Link
								className="social-icon-link twitter"
								to="/"
								target="_blank"
								aria-label="LinkedIn"
							>
								<i className="fab fa-linkedin" />
							</Link>
						</div>
					</div>
				</section>
			</div>
		</footer>
	);
}

export default Footer;
