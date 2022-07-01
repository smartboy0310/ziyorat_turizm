import React from 'react';
import './ProvinceParks.css';

import parkOne from '../../../Assets/Images/Qoraqalpoq/Parks/amir-temur.jpg';
import parkTwo from '../../../Assets/Images/Qoraqalpoq/Parks/istiqlol.jpg';
import parkAdd from '../../../Assets/Images/location.svg';

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
								width={300}
								height={350}
							/>
						</div>
						<div className="park-info">
							<h2 className="park-title">
								Amir Temur istirohat bog'i
							</h2>
							<p className="park-discription">
								Nukus shahrida bolalar va kattalar uchun yozgi
								dam olish órni
							</p>
							<div className="park-address">
								<img
									src={parkAdd}
									alt="Park address icon"
									width={40}
									height={40}
									className="park-add__img"
								/>
								<span>
									Nukus shahri A.Dosnazarov kóchasida joylashgan
								</span>
							</div>
						</div>
					</div>
					<div className="parks__info-box">
						<div className="parks__img-box">
							<img
								className="park-img"
								src={parkTwo}
								alt="Recreation parks"
								width={300}
								height={350}
							/>
						</div>
						<div className="park-info">
							<h2 className="park-title">
								Istiqlol istirohat bogi
							</h2>
							<p className="park-discription">
								Nukus shahrida bolalar va kattalar uchun yozgi
								dam olish órni
							</p>
							<div className="park-address">
								<img
									src={parkAdd}
									alt="Park address icon"
									width={40}
									height={40}
									className="park-add__img"
								/>
								<span>
									Nukus shahri A.Utepov r/u
								</span>
								</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProvinceParks;
