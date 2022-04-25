import React from 'react';
import './ProvinceRest.css';

import parkOne from '../../../Assets/Images/Qoraqalpoq/Restaurant/bacardi.jpg';
import parkTwo from '../../../Assets/Images/Qoraqalpoq/Restaurant/premir-lounge.jpg';

function ProvinceRest() {
	return (
		<section className="province-restaurants">
			<div className="container">
				<h2 className="restaurants-heading">Restoranlar</h2>
				<div className="restaurants__box">
					<div className="restaurants__info-box">
						<div className="parks__img-box">
						<img
							className="restaurant-img"
							src={parkOne}
							alt="Recreation parks"
							width={370}
							height={420}
						/>
						</div>
						<div className="restaurant-info">
							<h2 className="restaurant-title">
								Lorem ipsum dolor sit amet.
							</h2>
							<p className="restaurant-discription">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Quos, alias.
							</p>
						</div>
					</div>
					<div className="restaurants__info-box">
					<div className="restaurants__img-box">
						<img
							className="restaurant-img"
							src={parkTwo}
							alt="Recreation parks"
							width={370}
							height={420}
						/>
						</div>
						<div className="restaurant-info">
							<h2 className="restaurant-title">
								Lorem ipsum dolor sit amet.
							</h2>
							<p className="restaurant-discription">
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

export default ProvinceRest;
