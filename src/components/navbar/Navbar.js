import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import './navbar.css';

function clickTest() {
	console.log('click');
}

function Navbar() {
	return (
		<Router>
			<div>
				<nav className='navbar'>
					<h3>Hector Fernandez</h3>
					<ul className='list'>
						<li>
							<Link to="/" onClick={clickTest}>About</Link>
						</li>
						<li>
							<Link to="/portfolio" onClick={clickTest}>Portfolio</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route exact path="/">
						<About />
					</Route>
					<Route exact path="/portfolio">
						<Portfolio />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default Navbar;