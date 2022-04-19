import React from 'react';
import Slider from '../FoodSlider/Slider';
import './NationalFoods.css';

function NationalFoods() {
	return (
		<>
			<section className="national-foods">
				<div className="container">
					<h2 className="food-heading">Milliy taomlar</h2>
					<p className="food-description">
						O’zbekistonning bir biridan mazali milliy taomlari
					</p>
				</div>
			</section>
			<Slider />
		</>
	);
}

export default NationalFoods;
