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
			<section className="province-theater-section">
				<div className="container">
					<h2 className="province-theater-heading">
						Teatr va Kino zallar
					</h2>
					<div className="province-theater">
						<Slider
							autoplay
							autoplaySpeed={3000}
							initialSlide={2}
							infinite
							slidesToShow={4}
							prevArrow={<PreviousBtn />}
							nextArrow={<NextBtn />}
						>
							{SliderData.map((item, index) => (
								<div className="theater-image-box" key={index}>
									<div className="theater-sliders one">
										<Link to="/shrine">
											<img
												className="theater-image-slider"
												src={item}
												alt="Obyektlat rasmi"
												width={320}
												height={350}
											/>
											<div className="theater-slider-info">
												<h2 className="theater-slider-title">
													Lorem ipsum dolor sit amet.
												</h2>
												<p className="theater-slider-discription">
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
