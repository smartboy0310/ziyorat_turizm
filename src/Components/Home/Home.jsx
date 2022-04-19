import React from 'react'
import GameSection from './GameSection/GameSection'
import HeroSection from './HeroSection/HeroSection'
import HomeCountry from './HomeCounrty/HomeCountry'
import NationalFoods from './HomeFood/NationalFoods'
import SliderImage from './HomeSlider/Slider'

function Home() {
  return (
    <>
         <HeroSection />
         <SliderImage />
         <GameSection />
         <NationalFoods />
         <HomeCountry />
    </>
  )
}

export default Home
