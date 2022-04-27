import React from 'react';
import './ProvinceHotel.css';

import parkOne from '../../../Assets/Images/Qoraqalpoq/Hotel/nukus-plaza.jpg';
import parkTwo from '../../../Assets/Images/Qoraqalpoq/Hotel/ratmina.jpg';

function ProvinceHotel() {
	return (
		<section className="province-hotels">
			<div className="container">
				<h2 className="hotels-heading">Mehonxonalar</h2>
				<div className="hotels__box">
					<div className="hotels__info-box">
						<div className="hotels__img-box">
						<img
							className="hotel-img"
							src={parkOne}
							alt="Recreation parks"
							width={300}
							height={350}
						/>
						</div>
						<div className="hotel-info">
							<h2 className="hotel-title">
								Lorem ipsum dolor sit amet.
							</h2>
							<p className="hotel-discription">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Quos, alias.
							</p>
						</div>
					</div>
					<div className="hotels__info-box">
					<div className="hotels__img-box">
						<img
							className="hotel-img"
							src={parkTwo}
							alt="Recreation parks"
							width={300}
							height={350}
						/>
						</div>
						<div className="hotel-info">
							<h2 className="hotel-title">
								Lorem ipsum dolor sit amet.
							</h2>
							<p className="hotel-discription">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Quos, alias.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProvinceHotel;
