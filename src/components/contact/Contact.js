import React from 'react'
import './contact.css'

function Contact() {

	return (
		<main className='contactWrapper'>
			<div className="pleaseTextWrapper">
				<h1>Please,</h1>
				<h3>do be in touch.</h3>
			</div>
			<h4>hkfernandezdev@gmail.com</h4>
			{/* <button data-text='hkfernandezdev@gmail.com' onClick={copy}>{`[ copy ]`}</button> */}
			<a href="https://www.linkedin.com/in/hector-k-fernandez/" target="blank">{`[ LinkedIn ]`}</a>
			<h3>612-412-0494</h3>
		</main>
	);
}


export default Contact;