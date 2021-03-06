import React from 'react';
import './App.css';
import { Routes,  Route } from 'react-router-dom';
import ProvincePage from './Pages/ProvincePage';
import ShrinePage from './Pages/ShrinePage'
import HomePage from './Pages/HomePage';
import  SearchPage  from './Pages/SearchPage';
import CountryPage from './Pages/CountryPage';
import EssentailPage from './Pages/EssentialPage';
import GoTop from './Components/GoTop/GoTop';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
	return (
		
			<>
			<Header />
			<Routes className = 'routers'>				
				<Route path="/shrine"  element={<ShrinePage />} />
				<Route path="/province" element={<ProvincePage />} />
				<Route path="/search" element = {<SearchPage />}	/>
				<Route path='/country' element = {<CountryPage />} />
				<Route path="/essential" element = {<EssentailPage />} />
				<Route path="/" element={<HomePage/>} />
			</Routes>
			
			<GoTop />
			<Footer />
			</>
		
	);
}

export default App;
