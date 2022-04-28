import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../../Assets/Images/logo.jpg';
import langIcon from '../../../Assets/Images/lang-icon.svg';
import searchImg from '../../../Assets/Images/search.svg';

import img1 from '../../../Assets/Images/Viloyatlar/toshkent.jpg';
import img2 from '../../../Assets/Images/Viloyatlar/andijon.jpg';
import img3 from '../../../Assets/Images/Viloyatlar/buxoro.jpg';
import img4 from '../../../Assets/Images/Viloyatlar/fargona.jpg';
import img5 from '../../../Assets/Images/Viloyatlar/jizzax.jpg';
import img6 from '../../../Assets/Images/Viloyatlar/namangan.jpg';
import img7 from '../../../Assets/Images/Viloyatlar/navoi.jpg';
import img8 from '../../../Assets/Images/Viloyatlar/qashqadaryo.jpg';
import img9 from '../../../Assets/Images/Viloyatlar/qoraqolpoq.jpg';
import img10 from '../../../Assets/Images/Viloyatlar/samarqand.jpg';
import img11 from '../../../Assets/Images/Viloyatlar/sirdaryo.jpg';
import img12 from '../../../Assets/Images/Viloyatlar/toshkent-vil.jpg';
import img13 from '../../../Assets/Images/Viloyatlar/xorazm.jpg';

const counrty = [
	{
		name: 'Toshkent shahri',
		title: 'Bag’ri keng bilan mashxur',
		img: img1,
	},
	{
		name: 'Andijon viloyati',
		title: 'Devzira oshlari bilan mashxur',
		img: img2,
	},
	{
		name: 'Buxoro viloyati',
		title: 'G’ijdivon shashliklari bilan mashxur',
		img: img3,
	},
	{
		name: 'Farg’ona viloyati',
		title: 'Marg’ilon do’ppilari bilan mashxur',
		img: img4,
	},
	{
		name: 'Jizzax viloyati',
		title: 'Zomin tog’lari bilan mashxur',
		img: img5,
	},
	{
		name: 'Namangan viloyati',
		title: 'Cho’st pichoqlari bilan mashxur',
		img: img6,
	},
	{
		name: 'Navoiy viloyati',
		title: 'Qizilqum cho’llari bilan mashxur',
		img: img7,
	},
	{
		name: 'Qashqadaryo viloyati',
		title: 'O’zining tandir go’shtlari bilan mashxur',
		img: img8,
	},
	{
		name: 'Qoraqalpog’iston Respublikasi',
		title: 'Erkaboy va Abdulla bilan mashxur',
		img: img9,
	},
	{
		name: 'Samarqand  viloyati',
		title: 'Samarqand nonlari bilan mashxur',
		img: img10,
	},
	{
		name: 'Sirdaryo viloyati',
		title: 'Sirdaryo baliqlari bilan mashxur',
		img: img11,
	},
	{
		name: 'Toshkent viloyati',
		title: 'Shonli o’tmishi bilan mashxur',
		img: img12,
	},
	{
		name: 'Xorazm viloyati',
		title: 'Qadimiy binolari bilan mashxur',
		img: img13,
	},
];

function Navbar() {
	const [navbar, setNavbar] = useState(false);
	const [closeSub, setCloseSub] = useState(true);

	const navBarBack = () => {
		if (window.scrollY >= 40) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	const closeSubMenu = () => {
		setCloseSub(!closeSub);
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
								</Link>
								<div
									className={
										closeSub
											? 'submenu__box submenu--active'
											: 'submenu__box'
									}
								>
									<ul className="submenu__list">
										{counrty.map((e, i) => (
											<li
												onClick={closeSubMenu}
												key={i}
												className="submenu__item"
											>
												<Link
													className="submenu__link"
													to="/province"
												>
													<img
														className="submenu__img"
														src={e.img}
														alt={e.name}
														width={60}
														height={60}
													/>
													<h3 className="submenu__name">
														{e.name}
													</h3>
												</Link>
											</li>
										))}
									</ul>
								</div>
							</li>
							<li className="nav-item">
								<Link to="/essential" className="nav-links">
									Muhim ma'lumotlar
									<span className="nav-item__line"></span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contacts" className="nav-links">
									Kontakt
									<span className="nav-item__line"></span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" className="nav-links">
									Biz haqimizda
									<span className="nav-item__line"></span>
								</Link>
							</li>
						</ul>
						<div className="selection__lang">							
								<img
									className="lang__img"
									src={langIcon}
									alt="Language icon"
									width={26}
									height={26}
								/>
							<select className="lang__select">
								<option value="uz">UZ</option>
								<option value="ru">RU</option>
								<option value="en">EN</option>
							</select>
							
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
