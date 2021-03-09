import React from 'react';
import projectsArr from './projectsList.json'



function Portfolio() {

	const projects = projectsArr

	return (
		<main>
			{
				projects.map(
					(project) => {
						return (
							<section>
								<img src={project.image} alt={project.atlText} />
								<a href={project.depolyedLink}>{`[ Website ]`}</a>
								<a href={project.githubLink}>{`[ GitHub Repo ]`}</a>
								<p>{project.text}</p>
							</section>
						)
					}
				)
			}
		</main>
	);
}
export default Portfolio;