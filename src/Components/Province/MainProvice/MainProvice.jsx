import React from 'react';
import './MainProvince.css';
import arrowImg from '../../../Assets/Images/row.png';
import SliderShrine  from '../ShrineSlider/Slider'

function MainProvice() {
	return (
		<>
			<div className="main-provice-top">
				<img src={arrowImg} alt="Arrow top" className="arrow-img" />
			</div>
			<main className="main-provice">
			<SliderShrine />
			</main>
		</>
	);
}

export default MainProvice;
