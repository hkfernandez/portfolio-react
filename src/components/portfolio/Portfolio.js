import React from 'react';
import projectsArr from './projectsList'
import './portfolio.css'


function Portfolio() {

	const projects = projectsArr
	console.log(projects);

	return (
		<main className='portfolioWrapper'>
			{
				projects.map(
					(project, index) => {
						return (
							<section key={index} className='project'>
								<img src={project.imageSource} alt={project.atlText} />
								<div className="projectInfoWrapper">
									<p className='projectDescription'>{project.text}</p>
									<div className="linksAndTechWrapper">
										<p className='keyTech'>{project.tech}</p>
										<div className="linksWrapper">
											<a href={project.depolyedLink} target='blank'>{`[ Website ]`}</a>
											<a href={project.githubLink} target='blank'>{`[ GitHub Repo ]`}</a>
										</div>
									</div>
								</div>
							</section >
						)
					}
				)
			}
		</main >
	);
}
export default Portfolio;