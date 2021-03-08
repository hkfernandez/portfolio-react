import React from 'react'



function Portfolio() {

	const projects = [
		{
			image: "",
			depolyedLink: "",
			githubLink: "",
			text: "Learn about the stock market by trading risk free and following real time share prices.",
			tech: ['Javascript', 'jQuery', 'node']
		}
	]

	return (
		<main>
			{
				projects.map(
					(project) => {
						<div>
							<img src={project.image} alt="Investing Application" />
							<a href={project.depolyedLink}>Website</a>
							<a href={project.githubLink}>GitHub Repo</a>
							<p>{project.text}</p>
						</div>
					}
				)
			}
		</main>
	);
}
export default Portfolio;