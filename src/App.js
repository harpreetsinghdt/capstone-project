import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Logo from './assets/logo192.png';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Reservation from './components/reservation/Reservation';
import Onlineorder from './components/onlineorder/Onlineorder';
import Login from './components/Login';

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<header className='header'>
					<Link to='/'>
						<img src={Logo} alt='Logo' />
					</Link>
					<nav className='nav'>
						<ul>
							<li>
								<Link to='/'>Home</Link>
								<Link to='/about'>About</Link>
								<Link to='/menu'>Menu</Link>
								<Link to='/reservation'>Reservation</Link>
								<Link to='/online-order'>Online Order</Link>
								<Link to='/login'>Login</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main className='main'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/menu' element={<Menu />} />
						<Route path='/reservation' element={<Reservation />} />
						<Route path='/online-order' element={<Onlineorder />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
