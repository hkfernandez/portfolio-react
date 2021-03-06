import stockAppImg from './images/stocks.png'
import weatherAppImg from './images/weatherDashboardImg.png'
import recipeAppImg from './images/recipeAppImg.png'
import budgetAppImg from './images/budget.png'
import burgerAppImg from './images/burger.png'
import teamAppImg from './images/team.png'
import portfolioAppImg from './images/portfolio.png'
import featuredEdgeAppImg from './images/featuredEdge.png'
import moviesAppImg from './images/movies.png'


const projectsArr = [
	{
		imageSource: featuredEdgeAppImg,
		atlText: "Maker Web Application",
		depolyedLink: "https://featured-edge.herokuapp.com/",
		githubLink: "https://github.com/NickStull/maker-spotlight",
		text: "The Featured Edge is a place where blade enthusiasts can discover and connect with the knife makers that share their passion.",
		tech: [
			"React | ",
			"Express | ",
			"Node.js | ",
			"Mongodb & Moongoose | ",
			"SASS | ",
			"Cloudinary"
		]
	},
	{
		imageSource: moviesAppImg,
		atlText: "Movie Awards Web Application",
		depolyedLink: "https://sheltered-ridge-37821.herokuapp.com/",
		githubLink: "https://github.com/hkfernandez/movie_awards",
		text: "At the Shopify movie awards you can nominate your favorite movie.",
		tech: [
			"React | ",
			"Express | ",
			"Node.js | ",
			"Mongodb & Moongoose | ",
			"SASS | ",
			"React Bootstrap | ",
			"OMDB API"
		]
	},

	{
		imageSource: weatherAppImg,
		atlText: "Weather Web Application",
		depolyedLink: "https://hkfernandez.github.io/weather_dashboard/",
		githubLink: "https://github.com/hkfernandez/weather_dashboard",
		text: "A simple way to stay up to date on the current weather in different cities.",
		tech: [
			"Javascript | ",
			"jQuery | ",
			"Node.js | ",
			"LocalStorage"
		]
	},
	{
		imageSource: recipeAppImg,
		atlText: "Recipe Finder Web Application",
		depolyedLink: "https://dorykahale.github.io/Recipe-Saver/",
		githubLink: "https://github.com/hkfernandez/Recepi",
		text: "Find new recipe ideas in both English and Spanish and keep your favorites in one clean interface.",
		tech: [
			"Javascript | ",
			"jQuery | ",
			"Node.js | ",
			"UI-kit CSS Library | ",
			"Express Server | ",
			"mySQL & Sequelize | ",
			"Third Party API's Edamam & Spoonacular"
		]
	},
	{
		imageSource: burgerAppImg,
		atlText: "Hamburger Game Web Application",
		depolyedLink: "https://quiet-bayou-27411.herokuapp.com/",
		githubLink: "https://github.com/hkfernandez/Burger",
		text: "A fun, nonsensical game where the player can eat as many delicious burgers as they want without feeling bad.",
		tech: [
			"Javascript",
			"jQuery",
			"Node.js",
			"Vanilla CSS",
			"Handlebars",
			"Express Server",
			"mySQL"
		]
	},
	{
		imageSource: teamAppImg,
		atlText: "Team Directory Web Application",
		depolyedLink: "https://hkfernandez.github.io/employee-directory/",
		githubLink: "https://github.com/hkfernandez/employee-directory",
		text: "This app creates a list team members that can be dynamically filtered when searching and sorted by team member name.",
		tech: [
			"React | ",
			"Express Server",
		]
	},
	{
		imageSource: budgetAppImg,
		atlText: "Travel Budget Web Application",
		depolyedLink: "https://salty-harbor-32072.herokuapp.com/",
		githubLink: "https://github.com/hkfernandez/travel-budget",
		text: "A progressive web app that allows you to record expenses, even without an internet connection",
		tech: [
			"Javascript | ",
			"Service Worker | ",
			"Cache Storage | ",
			"IndexedDB | ",
			"Mongodb | ",
			"Mongoose"
		]
	},
]

const projectsArchive = [{
	imageSource: stockAppImg,
	atlText: "Investing Web Application",
	depolyedLink: "https://secret-cliffs-66187.herokuapp.com/",
	githubLink: "https://github.com/bardeeens/stock-simulator",
	text: "Learn about the stock market by trading risk free and following real time share prices.",
	tech: [
		"Javascript | ",
		"jQuery | ",
		"Node.js | ",
		"mySQL & Sequelize | ",
		"3rd Party API - FMP "
	]
}];

export default projectsArr;