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
			<section className="home-slider-section">
				<div className="container">
					<h2 className="home-slider-heading">Top Ziyoratgohlar</h2>
					<div className="home-slider">
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
								<div className="home-image-box" key={index}>
									<div className="home-sliders">
										<Link to="/shrine">
											<img
												className="home-image-slide"
												src={item}
												alt="Obyektlat rasmi"
												width={300}
												height={380}
											/>
											<div className="home-slider-info">
												<h2 className="home-slide-title">
													Lorem ipsum dolor sit amet.
												</h2>
												<p className="home-slider-discription">
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
