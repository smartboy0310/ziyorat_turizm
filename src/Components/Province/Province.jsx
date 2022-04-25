import React from 'react';
import MainProvice from './MainProvice/MainProvice';
import ProvinceHero from './ProvinceHero/ProvinceHero';
import ProvinceHotel from './ProvinceHotel/ProvinceHotel';
import ProvinceMosque from './ProvinceMosque/ProvinceMosque';
import ProvinceParks from './ProvinceParks/ProvinceParks';
import ProvinceRest from './ProvinceRest/ProvinceRest';
import SliderTheater from './ProvinceTheater/Slider';


function Province() {
	return (
		<>
			<ProvinceHero />
			<MainProvice />
			<ProvinceParks />
			<SliderTheater />
			<ProvinceHotel />
			<ProvinceRest />
			<ProvinceMosque />
		</>
	);
}

export default Province;
