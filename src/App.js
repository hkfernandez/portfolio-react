import React from 'react'
import './text.css'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {
	return (
		<Router>
			<Navbar />
			<Route exact path="" component={About} />
			<Route exact path="/" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/portfolio" component={Portfolio} />
			<Footer />
		</Router>
	);
}

export default App;
