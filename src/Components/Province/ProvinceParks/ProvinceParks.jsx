import React from 'react';
import './ProvinceParks.css';

import parkOne from '../../../Assets/Images/Qoraqalpoq/Parks/amir-temur.jpg';
import parkTwo from '../../../Assets/Images/Qoraqalpoq/Parks/istiqlol.jpg';

function ProvinceParks() {
	return (
		<section className="province-parks">
			<div className="container">
				<h2 className="parks-heading">Istirohat bog‘lari</h2>
				<div className="parks__box">
					<div className="parks__info-box">
						<div className="parks__img-box">
						<img
							className="park-img"
							src={parkOne}
							alt="Recreation parks"
							width={370}
							height={420}
						/>
						</div>
						<div className="park-info">
							<h2 className="park-title">
								Lorem ipsum dolor sit amet.
							</h2>
							<p className="park-discription">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Quos, alias.
							</p>
						</div>
					</div>
					<div className="parks__info-box">
					<div className="parks__img-box">
						<img
							className="park-img"
							src={parkTwo}
							alt="Recreation parks"
							width={370}
							height={420}
						/>
						</div>
						<div className="park-info">
							<h2 className="park-title">
								Lorem ipsum dolor sit amet.
							</h2>
							<p className="park-discription">
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

export default ProvinceParks;
