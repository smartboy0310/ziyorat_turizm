import React from 'react';
import './MainProvince.css';
import arrowImg from '../../../Assets/Images/row.png';
import ShrineCrad from '../ShrineCard/ShrineCard';

function MainProvice() {
	return (
		<>
			<div className="main-top">
				<img src={arrowImg} alt="Arrow top" className="arrow-img" />
			</div>
			<main className="main-provice">
				<div className="main-provice-info">
					<h2 className="heading">Qoraqalpog'iston Respublikasi</h2>
					<p className="description">
						Qoraqalpog‘iston Respublikasi O‘zbekiston
						Respublikasining shimoliy-g‘arbida, Amudaryoning quyi,
						Orol dengizining janubiy qismida joylashgan.
						Qoraqalpog‘iston Respublikasi 1932-yil 20-martda tashkil
						qilingan. <br />
						Umumiy yer maydoni 166,6 ming kvadrat kilometrdan iborat
						bo‘lib, u hududning kattaligi jihatdan O‘zbekiston
						Respublikasi mintaqalari o‘rtasida birinchi o‘rinda
						turadi. <br />
						Respublika janubiy-g‘arb tomondan Qoraqum sahrosiga
						tutashgan. Uning shimoli-g‘arbida Ustyurt pasttekisligi,
						shimoliy-sharqiy tomonida esa Qizilqum sahrosi yastanib
						yotibdi. Orol dengizining janubiy hududi qoraqalpoq
						zaminida joylashgan. Mintaqa yer maydonlarining 80
						foizdan ortig‘ini qum barxanlaridan iborat cho‘l
						hududlari tashkil qiladi. <br />
						Respublika aholisi (2014 yil boshiga) 1 million 736 ming
						kishidan ziyod bo‘lib, aholining milliy tarkibida
						o‘zbeklar 38,1 foizni, qoraqalpoqlar 35,7 foizni,
						qozoqlar 18,2 foizni, turkmanlar 5,1 foizni ruslar 0,7
						foizni koreyslar 0,4 foizni, tatarlar 0,3 foizni va
						boshqada millatlar 1,5 foizni tashkil qiladi. <br />
						Respublikaning ma’muriy-hududiy tuzilmasi 14 ta tuman, 1
						ta shahardan iborat bo‘lib, markazi - Nukus shahri.
						Mintaqa Qozog‘iston (990 km) va Turkmaniston (784,1 km)
						davlatlari, Xorazm (263,2 km), Navoiy (300 km) va Buxoro
						(66 km) viloyatlari bilan chegaradosh. <br /> Quyi
						Amudaryoning janubiy qismida, qumli kengliklar o‘rtasida
						Qoraqalpog‘iston Respublikasining poytaxti, uning
						iqtisodiy, ma’muriy va madaniy markazi bo‘lgan Nukus
						shahri joylashgan. Jug‘rofiy nuqtai nazardan shahar
						respublikaning qoq o‘rtasida, turli transport
						kommunikatsiya tarmoqlari kelib tutashadigan juda qulay
						manzilda joylashgan. Shaharning tarixan uchta darvozasi
						sanalmish To‘rtko‘l, Chimboy va Xo‘jayli guzar yo‘llari
						orqali respublikaning istalgan tumaniga yetib borish
						mumkin. “Qizketken” va “Qattag‘ar” deb nomlangan katta
						magistral kanallari shaharning nafaqat shaharning, balki
						butun respublikaning qon tomirlaridir. Hududdan halqaro
						ahamiyatdagi magistral avtomobil yo‘llari va
						temiryo‘llar o‘tib, bu yo‘llar orqali Qozog‘iston va
						Rossiya davlatlariga chiqish imkoniyati mavjud.
					</p>

					<div className="nature-info">
						
					</div>
				</div>
				<ShrineCrad id = 'country'/>
			</main>
		</>
	);
}

export default MainProvice;
