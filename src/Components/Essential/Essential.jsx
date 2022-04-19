import React from 'react';
import { Link } from 'react-router-dom';
import './Essential.css';

function Essential() {
	return (
		<>
			<section className="essential">
				<div className="essential-fon">
					
				</div>
				<div className="container">
					<h2 className="essential-heading">Muhim ma'lumotlar</h2>
					<ul className="essential-list">
						<li className="essential-item">
							<Link to="/essential" className="essential-link">
								<img
									src="https://picsum.photos/300/300"
									alt="essential info img"
									width={300}
									heigh={300}
								/>
								<h3 className="essential-info-title">
									Muhim ma'lumot nomi
								</h3>
							</Link>
						</li>
						<li className="essential-item">
							<Link to="/essential" className="essential-link">
								<img
									src="https://picsum.photos/300/300"
									alt="essential info img"
									width={300}
									heigh={300}
								/>
								<h3 className="essential-info-title">
									Muhim ma'lumot nomi
								</h3>
							</Link>
						</li>
						<li className="essential-item">
							<Link to="/essential" className="essential-link">
								<img
									src="https://picsum.photos/300/300"
									alt="essential info img"
									width={300}
									heigh={300}
								/>
								<h3 className="essential-info-title">
									Muhim ma'lumot nomi
								</h3>
							</Link>
						</li>
						<li className="essential-item">
							<Link to="/essential" className="essential-link">
								<img
									src="https://picsum.photos/300/300"
									alt="essential info img"
									width={300}
									heigh={300}
								/>
								<h3 className="essential-info-title">
									Muhim ma'lumot nomi
								</h3>
							</Link>
						</li>
						<li className="essential-item">
							<Link to="/essential" className="essential-link">
								<img
									src="https://picsum.photos/300/300"
									alt="essential info img"
									width={300}
									heigh={300}
								/>
								<h3 className="essential-info-title">
									Muhim ma'lumot nomi
								</h3>
							</Link>
						</li>
						<li className="essential-item">
							<Link to="/essential" className="essential-link">
								<img
									src="https://picsum.photos/300/300"
									alt="essential info img"
									width={300}
									heigh={300}
								/>
								<h3 className="essential-info-title">
									Muhim ma'lumot nomi
								</h3>
							</Link>
						</li>
						<li className="essential-item">
							<Link to="/essential" className="essential-link">
								<img
									src="https://picsum.photos/300/300"
									alt="essential info img"
									width={300}
									heigh={300}
								/>
								<h3 className="essential-info-title">
									Muhim ma'lumot nomi
								</h3>
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Essential;
