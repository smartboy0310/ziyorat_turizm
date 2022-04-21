import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../../Assets/Images/logo.jpg';
import myTrip from '../../../Assets/Images/my-trip.svg';
import searchImg from '../../../Assets/Images/search.svg';

function Navbar() {
	const [navbar, setNavbar] = useState(false);

	const navBarBack = () => {
		if (window.scrollY >= 40) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', navBarBack);

	return (
		<header className={navbar ? 'header active' : 'header'}>
			<div className="container">
				<nav className="navbar">
					<Link to="/" className="navbar-logo">
						<img
							src={logoImg}
							alt="logo"
							className="logo-img"
							width={60}
							height={60}
						/>
					</Link>

					<div className="navbar-info">
						<ul className="nav-menu">
							<li className="nav-item">
								<Link to="/" className="nav-links">
									Bosh sahifa
									<span className="nav-item__line"></span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/country" className="nav-links">
									Shaharlar
									<span className="nav-item__line"></span>
								</Link>
								<div className="submenu__box"></div>
							</li>
							<li className="nav-item">
								<Link to="/essential" className="nav-links">
									Muhim ma'lumotlar
									<span className="nav-item__line"></span>
								</Link>
								<div className="submenu__box"></div>
							</li>
							<li className="nav-item">
								<Link to="/contacts" className="nav-links">
									Kontakt
									<span className="nav-item__line"></span>
								</Link>
								<div className="submenu__box"></div>
							</li>
							<li className="nav-item">
								<Link to="/about" className="nav-links">
									Biz haqimizda
									<span className="nav-item__line"></span>
								</Link>
								<div className="submenu__box"></div>
							</li>
						</ul>
						<div className="my-trip">
							<Link to="/bookmarks">
								<img
									className="my-trip__img"
									src={myTrip}
									alt="Bookmarks"
									width={25}
									height={25}
								/>
							</Link>
						</div>
						<div className="search">
							<Link to="/search">
								<img
									src={searchImg}
									alt=""
									className="search__img"
									width={25}
									height={25}
								/>
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
