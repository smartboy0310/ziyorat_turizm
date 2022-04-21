import React from 'react';
import './ShrineCard.css';
import CardItem from '../../CardItem/CardItem';
import sulUvaysImg from '../../../Assets/Images/sul-uvays.jpg'
import berdaqMusImg from '../../../Assets/Images/img-1.jpg'
import dauitOtaImg from '../../../Assets/Images/dauit-ota.jpg'
import mazlumxanImg from '../../../Assets/Images/mazlumxan.jpg'
import xakimOtaImg from '../../../Assets/Images/xakim-ota.jpg'
function ShrineCard() {
	return (
		<div  className='cards'>
      <h1>Ancient shrine monuments!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={sulUvaysImg}
              text='Султон Увайс Қараний зиёратгоҳи'
              label='Shrine'
              path='/shrine'
            />
            <CardItem
              src={berdaqMusImg}
              text='Бердақ миллий музейи'
              label='Museum'
              path='/shrine'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={dauitOtaImg}
              text='«ДАУИТ АТА МАҚБАРАСИ» АРХИТЕКТУРА ЁДГОРЛИГИ'
              label='Monument'
              path='/shrine'
            />
            <CardItem
              src={mazlumxanImg}
              text='«МАЗЛУМХАН СУЛУВ МАҚБАРАСИ» АРХИТЕКТУРА ЁДГОРЛИГИ'
              label='Monument'
              path='/shrine'
            />
            <CardItem
              src={xakimOtaImg}
              text='«ҲАКИМ OTA МАҚБАРАСИ» АРХИТЕКТУРА ЁДГОРЛИГИ'
              label='Shrine'
              path='/shrine'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={sulUvaysImg}
              text='Султон Увайс Қараний зиёратгоҳи'
              label='Shrine'
              path='/shrine'
            />
            <CardItem
              src={berdaqMusImg}
              text='Бердақ миллий музейи'
              label='Museum'
              path='/shrine'
            />
          </ul>
        </div>
      </div>
    </div>
	);
}

export default ShrineCard;
