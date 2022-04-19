import React from 'react';
import './Search.css';

function Search() {
   
	return (
		<>
			<section className="search">
				<div className="search__fon">
					
				</div>
				<div className="container">
					<div className="search__top">
						<form className="search">
							<input
								className="search__input"
								type="text"
								placeholder="Nima izlayapsiz"
							/>
						</form>
					</div>
					<div className="search__bottom">
						<div className="search_filter">
							<ul className="filter__list">
								<li className="filter__item">
									<h3 className="filter__title">Bo'limlar</h3>
									<label>
										<input className='checkbox' type="checkbox" />
										Ziyotgohlar
									</label>
									<label>
										<input className='checkbox' type="checkbox" />
										Muziylar
									</label>
								</li>
								<li className="filter__item">
									<h3 className="filter__title">
										Dinlar bo'yicha
									</h3>
									<label>
										<input className='checkbox' type="checkbox" />
										Islom
									</label>
									<label>
										<input className='checkbox' type="checkbox" />
										Boshqa din
									</label>
								</li>
								<li className="filter__item">
									<h3 className="filter__title">Reyting</h3>
									<label>
										<input className='checkbox' type="checkbox" />
										Top
									</label>
									<label>
										<input className='checkbox' type="checkbox" />
										Popular
									</label>
								</li>
							</ul>
						</div>
						<div className="search__info"></div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Search;
