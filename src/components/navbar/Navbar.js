import React from 'react'
import {
	BrowserRouter as Router, Switch, Route, Link,
	useLocation
} from "react-router-dom";
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import './navbar.css';


function Navbar() {

	// const location = useLocation();

	return (
		<Router>
			<div>
				<nav className='navbar'>
					<h3 className='hector'>Hector Fernandez</h3>
					<ul className='list'>
						<li>
							<Link to="/"
							// className={location.pathname === "/" ? "nav-link active" : "nav-link"}
							>
								{`[ About ]`}
							</Link>
						</li>
						<li>
							<Link to="/portfolio">{`[ Portfolio ]`}	</Link>
						</li>
						<li>
							<Link to="/contact">{`[ Contact ]`}</Link>
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