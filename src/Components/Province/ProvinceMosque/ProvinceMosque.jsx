import React from 'react';
import './ProvinceMosque.css';

import parkOne from '../../../Assets/Images/Qoraqalpoq/Masjidlar/allahberdi-aziz.jpg';
import parkTwo from '../../../Assets/Images/Qoraqalpoq/Masjidlar/imom-eshon.jpg';

function ProvinceMosque() {
	return (
		<section className="province-mosques">
			<div className="container">
				<h2 className="mosques-heading">Masjidlar</h2>
				<div className="mosques__box">
					<div className="mosques__info-box">
						<div className="mosques__img-box">
						<img
							className="mosque-img"
							src={parkOne}
							alt="Recreation parks"
							width={300}
							height={350}
						/>
						</div>
						<div className="mosque-info">
							<h2 className="mosque-title">
								Lorem ipsum dolor sit amet.
							</h2>
							<p className="mosque-discription">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Quos, alias.
							</p>
						</div>
					</div>
					<div className="mosques__info-box">
					<div className="mosques__img-box">
						<img
							className="park-img"
							src={parkTwo}
							alt="Recreation parks"
							width={300}
							height={350}
						/>
						</div>
						<div className="mosque-info">
							<h2 className="mosque-title">
								Lorem ipsum dolor sit amet.
							</h2>
							<p className="mosque-discription">
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

export default ProvinceMosque;
