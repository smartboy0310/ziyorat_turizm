import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderData } from './SliderData';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import './Slider.css';

const PreviousBtn = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<ArrowBackIos style={{ color: 'black' }} />
		</div>
	);
};
const NextBtn = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<ArrowForwardIos style={{ color: 'black' }} />
		</div>
	);
};
const SliderImage = () => {
	return (
		<>
			<section className="province-shrine-section">
				<div className="container">
					<h2 className="province-shrine-heading">
					Qoraqalpog‘iston Respublikasining diqqatga sazovor Ziyoratgohlari
					</h2>
					<div className="province-shrine">
						<Slider
							autoplay
							autoplaySpeed={3000}
							initialSlide={2}
							infinite
							prevArrow={<PreviousBtn />}
							nextArrow={<NextBtn />}
						>
							{SliderData.map((item, index) => (
								<div className="shrine-image-box" key={index}>
									<div className="shrine-sliders one">
										<Link to="/shrine">
											<img
												className="shrine-image-slider"
												src={item}
												alt="Obyektlat rasmi"
												width={370}
												height={400}
											/>
											<div className="shrine-slider-info">
												<h2 className="home-slider-title">
													Lorem ipsum dolor sit amet.
												</h2>
												<p className="shrine-slider-discription">
													Lorem ipsum dolor sit, amet
													consectetur adipisicing
													elit. Quos, alias.
												</p>
											</div>
										</Link>
									</div>
									<div
										className="shrine-sliders"
										key={index + 1}
									>
										<Link to="/shrine">
											<img
												className="shrine-image-slider"
												src={
													index + 1 < 4
													? SliderData[index + 1]
													: SliderData[0]
												}
												alt="Obyektlat rasmi"
												width={370}
												height={400}
											/>
											<div className="shrine-slider-info">
												<h2 className="shrine-slider-title">
													Lorem ipsum dolor sit amet.
												</h2>
												<p className="shrine-slider-discription">
													Lorem ipsum dolor sit, amet
													consectetur adipisicing
													elit. Quos, alias.
												</p>
											</div>
										</Link>
									</div>
									<div
										className="shrine-sliders"
										key={index + 2}
									>
										<Link to="/shrine">
											<img
												className="shrine-image-slider"
												src={
													index + 2 < 4
														? SliderData[index + 2]
														: SliderData[1]
												}
												alt="Obyektlat rasmi"
												width={370}
												height={400}
											/>
											<div className="shrine-slider-info">
												<h2 className="shrine-slider-title">
													Lorem ipsum dolor sit amet.
												</h2>
												<p className="shrine-slider-discription">
													Lorem ipsum dolor sit, amet
													consectetur adipisicing
													elit. Quos, alias.
												</p>
											</div>
										</Link>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</section>
		</>
	);
};

export default SliderImage;
