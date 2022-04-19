import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';

function Country() {
	const country = [];
	const obj = {
		name: 'Viloyat nomi',
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia distinctio odio, officia saepe culpa assumenda facilis eligendi autem voluptate?',
		image: ' https://picsum.photos/300/300',
	};
	for (let i = 1; i <= 13; i++) {
		country.push({
			name: obj.name,
			title: obj.title,
			image: obj.image,
		});
	}

	return (
		<>
			<section className="country">
				<div className="country__top">
					
				</div>
				<div className="container">
					<ul className="country__list">
						{country &&
							country.map((e, i) => (
								<li key={i} className="country__item">
									<Link
										to="/province"
										className="country__link"
									>
										<ul className="sub__list">
											<li className="sub__item">
												<img
													src={e.image}
													alt={e.name}
													className="country__img"
													width={300}
													height={300}
												/>
											</li>
											<li className="sub__item">
												<div className="country__info">
													<h2 className="country__heading">
														{e.name}
													</h2>
													<p className="country__discription">
														{e.title}
													</p>
												</div>
											</li>
										</ul>
									</Link>
								</li>
							))}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Country;
