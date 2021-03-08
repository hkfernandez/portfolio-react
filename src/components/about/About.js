import React from 'react'
import myPhoto from './images/me.png'
import './about.css';

function About() {
	return (
		<main>
			<div className='wrapper'>
				<header>
					<h1>Welcome,</h1>
					<h3>so glad you were able to stop by.</h3>
				</header>
				<img src={myPhoto} alt="Hector Was Here" />
				<section>
					<p>My name is Hector, and I love making useful, beautiful things. I work as a web developer in the MERN stack and also know lots about tradeshows, residential remodeling and theatrical set design from my past lives.</p>
					<p>Use the links at the top of the page to see some of work or drop me a line. </p>
					<a href='https://drive.google.com/file/d/1khv5D-Mb2aM4oVDFQrrgkjT4x_4oNUKg/view?usp=sharing'
						target='blank'>
						{`[ Resume ]`}
					</a>
				</section>
			</div>
		</main>
	);
}
export default About;