import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './navbar.css';


function Navbar() {

	const location = useLocation();

	return (
		<>
			<nav className='navbar'>
				<h3 className='hector'>Hector Fernandez</h3>
				<ul className='list'>
					<li>
						<Link to="/" className={location.pathname === "/" ? "activeLink" : ""}>
							{`[ About ]`}
						</Link>
					</li>
					<li>
						<Link to="/portfolio" className={location.pathname === "/portfolio" ? "activeLink" : ""}>
							{`[ Portfolio ]`}
						</Link>
					</li>
					<li>
						<Link to="/contact" className={location.pathname === "/contact" ? "activeLink" : ""}>
							{`[ Contact ]`}
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
export default Navbar;