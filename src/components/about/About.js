import React, { useEffect, useState } from 'react'
import myPhoto from './images/me.png'
import './about.css';

function About() {

	const [imageState, setImageState] = useState();
	const [textColorState, setTextColorState] = useState();
	const [textLevelState, setTextLevelState] = useState();
	const [bioCoverState, setBioCoverState] = useState();
	const [welcomeTextClassName, setWelcomeTextClassName] = useState('welcomeTextAnimated');
	const [soGladTextClassName, setSoGladTextClassName] = useState('soGladTextAnimated');
	const [myImageCoverClassName, setMyImageCoverClassName] = useState('myImageCoverAnimated');
	const [aboutMeCoverClassName, setAboutMeCoverClassName] = useState('aboutMeCoverAnimated');
	const [useTheTextClassName, setUseTheTextClassName] = useState('useTheTextAnimated');
	const [resumeBtnClassName, setResumeBtnClassName] = useState('resumeBtnAnimated');

	function checkPageViewStatus() {
		let pageViewedState = JSON.parse(sessionStorage.getItem('viewedState'));
		if (pageViewedState === true) {
			return true;
		} else {
			sessionStorage.setItem('viewedState', true);
			return false;
		}
	}

	useEffect(
		() => {
			let pageHasBeenViewed = checkPageViewStatus();
			console.log('page has been viewed', pageHasBeenViewed);
			if (pageHasBeenViewed === true) {
				console.log('removing animation from welcome text');
				setWelcomeTextClassName('welcomeText');
				setSoGladTextClassName('soGladText');
				setMyImageCoverClassName('hideMyImageCover');
				setAboutMeCoverClassName('hideAboutMeCover');
				setUseTheTextClassName('useTheText')
			}
		},
		[]
	)

	return (
		<main className='aboutComponentWrapper'>
			<div>
				<header className='aboutHeader'>
					<h1 className={`whiteText ${welcomeTextClassName}`}>Welcome,</h1>
					<h3 className={`whiteText ${soGladTextClassName}`}> so glad you were able to stop by.</h3>
				</header>
				<div className="aboutBody">
					<figure className='myImageWrapper'>
						<div className="myImageRealativeWrapper">
							<img className="myImg" src={myPhoto} alt="Hector Was Here" />
							<div className={`myImageCover ${myImageCoverClassName}`}>Hi</div>
						</div>
					</figure>
					<section className='aboutMeWrapper'>
						<div className="aboutMeRelativeWrapper">
							<div className={`aboutMeCover ${aboutMeCoverClassName}`}></div>
							<div className="aboutMe">
								<p>My name is  <span className='bold'>Hector</span>, and I love making useful, beautiful things. I work as a web developer in the MERN stack and also know lots about tradeshows, residential remodeling and theatrical set design from my past lives.</p>
								<a
									className={`whiteText ${resumeBtnClassName}`}
									href='https://drive.google.com/file/d/1khv5D-Mb2aM4oVDFQrrgkjT4x_4oNUKg/view?usp=sharing'
									target='blank'
								>
									{`[ Resume ]`}
								</a>
								<p className={`whiteText ${useTheTextClassName}`}>Use the <span className='bold'>links at the top of the page</span> to see some of my work or drop me a line. </p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main >
	);
}
export default About;