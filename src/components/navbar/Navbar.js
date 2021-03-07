import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../about/About'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'

function Navbar () {
  return (
		<Router>
		<div>
			<nav>
			<ul>
				<li>
				<Link to="/">About</Link>
				</li>
				<li>
				<Link to="/portfolio">Portfolio</Link>
				</li>
				<li>
				<Link to="/contact">Contact</Link>
				</li>
			</ul>
			</nav>

			<Switch>
			<Route path="/">
				<About />
			</Route>
			<Route path="/portfolio">
				<Portfolio />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			</Switch>
		</div>
		</Router>
  );
}
export default Navbar;