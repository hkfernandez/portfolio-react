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
								<p>{project.text}</p>
								<a href={project.depolyedLink}>{`[ Website ]`}</a>
								<a href={project.githubLink}>{`[ GitHub Repo ]`}</a>
								<p>Key Tech: {project.tech}</p>
							</section>
						)
					}
				)
			}
		</main>
	);
}
export default Portfolio;