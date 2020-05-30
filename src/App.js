import React, { Component } from 'react'
import Cosmic from 'cosmicjs'

import { env } from './env.js'
import About from './components/containers/About'
import Contact from './components/containers/Contact'
import Header from './components/widgets/header'
import Idioms from './components/containers/Idioms'
import Portfolio from './components/containers/Portfolio'

import { StyledApp } from './app.css.js'
import logo from './logo.svg'

import './App.css'

class App extends Component {
	state = {
		cmsBucket: {},
		aboutData: {
			technologies: [],
			skills: [],
			languages: [],
			companies: [],
			aboutCopy: {},
		},
		idiomsData: [],
		portfolioData: [],
		visibleSection: '',
	}

	componentWillMount = async () => {
		/*
		** If I decide to go with graph.cool
		*/
		// const query = `
		// 	{
		// 		allUsers {
		// 			id
		// 		}
		// 	}
		// `
		//
		// const response = await fetch(
		// 	'https://api.graph.cool/simple/v1/dylan-grant-portfolio',
		// 	{
		// 		method: 'post',
		// 		headers: {
		// 			'content-type': 'application/json',
		// 		},
		// 		body: JSON.stringify({ query }),
		// 	},
		// )
		//
		// const responseJSON = await response.json()
		// const data = responseJSON.data
		// console.log('graph.cool response %o', data)

		/*
		** If I choose to use cosmicjs
		*/
		// const portfolioBucket = Cosmic().bucket({
		// 	slug: env.BUCKET_NAME,
		// 	read_key: env.READ_KEY,
		// 	write_key: env.WRITE_KEY,
		// })

		// READ / WRITE KEYS - Recommended to use dotenv NPM package to pass enviornment variables. 
		const portfolioBucket = Cosmic().bucket({
			slug: 'xxx-portfolio-site',
			read_key: 'xxXXXXXXXXXXXXXxxxx',
			write_key: 'xxXXXXXXXXXXXXXxxxx',',
		})
		const cmsBucket = await portfolioBucket.getBucket()

		let technologies = await portfolioBucket.getObjectsByType({
			type_slug: 'technologies',
		})

		technologies = technologies.objects

		let skills = await portfolioBucket.getObjectsByType({
			type_slug: 'skills',
		})
		skills = skills.objects

		let languages = await portfolioBucket.getObjectsByType({
			type_slug: 'languages',
		})
		languages = languages.objects

		let companies = await portfolioBucket.getObjectsByType({
			type_slug: 'companies',
		})
		companies = companies.objects

		const projects = await portfolioBucket.getObjectsByType({
			type_slug: 'projects',
		})
		const portfolioData = projects.objects

		const aboutContent = await portfolioBucket.getObject({
			slug: 'about-page'
		})

		console.log(aboutContent.object.metadata)

		// const aboutCopy = aboutContent.objects[0].metadata
		const aboutCopy = aboutContent.object.metadata

		const aboutData = {
			technologies,
			skills,
			languages,
			companies,
			aboutCopy,
		}

		const idioms = await portfolioBucket.getObjectsByType({
			type_slug: 'idioms',
		})

		const idiomsData = idioms.objects

		return this.setState({ cmsBucket, aboutData, portfolioData, idiomsData })
	}

	clickHandler = (event) => {
		const targetElement = event.target.getAttribute('data-view-visibility')

		//TODO this scoll handler needs to be fixed to target the section
		// console.log('event.target', event.target)
		// const sectionsArr = document.querySelectorAll('section')
		// console.log('sectionsArr', sectionsArr)
		// sectionsArr.map((section) => section.scrollTo(0, 0))
		return this.setState({ visibleSection: targetElement })
	}

	render() {
		return (
			<StyledApp className="App">
				<section className="home-view">
					<div className="home-picture" />
					<p className="home-tag-line" />
				</section>

				<Header clickHandler={this.clickHandler} />

				<main className="main-view">
					<About
						data={this.state.aboutData}
						isVisibile={this.state.visibleSection === 'ABOUT'}
					/>
					<Portfolio
						data={this.state.portfolioData}
						isVisibile={this.state.visibleSection === 'PORTFOLIO'}
					/>
				{/* <Idioms
							data={this.state.idiomsData}
							isVisibile={this.state.visibleSection === 'IDIOMS'}
					/>*/}

					<Contact isVisibile={this.state.visibleSection === 'CONTACT'} />
				</main>

				{/* <footer className="app-footer">
					<p>Footer</p>
				</footer> */}
			</StyledApp>
		)
	}
}

export default App
