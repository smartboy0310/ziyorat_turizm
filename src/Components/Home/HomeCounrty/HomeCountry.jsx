
import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCounrty.css';
import img1 from '../../../Assets/Images/Viloyatlar/toshkent.jpg';
import img2 from '../../../Assets/Images/Viloyatlar/andijon.jpg';
import img3 from '../../../Assets/Images/Viloyatlar/buxoro.jpg';
import img4 from '../../../Assets/Images/Viloyatlar/fargona.jpg';
import img5 from '../../../Assets/Images/Viloyatlar/jizzax.jpg';
import img6 from '../../../Assets/Images/Viloyatlar/namangan.jpg';
import img7 from '../../../Assets/Images/Viloyatlar/navoi.jpg';
import img8 from '../../../Assets/Images/Viloyatlar/qashqadaryo.jpg';
import img9 from '../../../Assets/Images/Viloyatlar/qoraqolpoq.jpg';
import img10 from '../../../Assets/Images/Viloyatlar/samarqand.jpg';
import img11 from '../../../Assets/Images/Viloyatlar/sirdaryo.jpg';
import img12 from '../../../Assets/Images/Viloyatlar/toshkent-vil.jpg';
import img13 from '../../../Assets/Images/Viloyatlar/xorazm.jpg';

const counrty = [
	{
		name: 'Toshkent shahri',
		title: 'Bag’ri keng bilan mashxur',
		img: img1,
	},
	{
		name: 'Andijon viloyati',
		title: 'Devzira oshlari bilan mashxur',
		img: img2,
	},
	{
		name: 'Buxoro viloyati',
		title: 'G’ijdivon shashliklari bilan mashxur',
		img: img3,
	},
	{
		name: 'Farg’ona viloyati',
		title: 'Marg’ilon do’ppilari bilan mashxur',
		img: img4,
	},
	{
		name: 'Jizzax viloyati',
		title: 'Zomin tog’lari bilan mashxur',
		img: img5,
	},
	{
		name: 'Namangan viloyati',
		title: 'Cho’st pichoqlari bilan mashxur',
		img: img6,
	},
	{
		name: 'Navoiy viloyati',
		title: 'Qizilqum cho’llari bilan mashxur',
		img: img7,
	},
	{
		name: 'Qashqadaryo viloyati',
		title: 'O’zining tandir go’shtlari bilan mashxur',
		img: img8,
	},
	{
		name: 'Qoraqalpog’iston Respublikasi',
		title: 'Erkaboy va Abdulla bilan mashxur',
		img: img9,
	},
	{
		name: 'Samarqand  viloyati',
		title: 'Samarqand nonlari bilan mashxur',
		img: img10,
	},
	{
		name: 'Sirdaryo viloyati',
		title: 'Sirdaryo baliqlari bilan mashxur',
		img: img11,
	},
	{
		name: 'Toshkent viloyati',
		title: 'Shonli o’tmishi bilan mashxur',
		img: img12,
	},
	{
		name: 'Xorazm viloyati',
		title: 'Qadimiy binolari bilan mashxur',
		img: img13,
	},
];

function HomeCountry() {
	return (
		<>
			<section className="home-country">
				<div className="container">
					<h2 className="counrty-box-heading">
						O’zbekiston viloyatlari
					</h2>
					<p className="counrty-box-description">
						O’zbekistonning bir birida o’zgacha bo’lgan viloyatlari
					</p>
				</div>
				<ul className="country-box-list">
					{counrty.map((e, i) => (
						<li key={i} className="country-box-item">
							<Link className="country-img-box" to="/province">
								<img
									className="country-box-img"
									src={e.img}
									alt={e.name}
									width={410}
									height={232}
								/>
							
							<div className="country-box__info">
								<div className="info-box">
                        <h3 className="counrty-box-name">{e.name}</h3>
								<p className="country-box-title">{e.title}</p>
                        </div>
							</div>
                     </Link>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}

export default HomeCountry;
