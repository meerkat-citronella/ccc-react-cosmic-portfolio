import React from "react";
import Chart from "chart.js";
import { HorizontalBar, Radar } from "react-chartjs-2";
// import { Form, Button } from 'semantic-ui-react'

import { PageView } from "./view.css.js";
import { mapData } from "../../lib/helpers";

const About = ({ isVisibile, data }) => {
	const styles = {
		width: isVisibile ? "100%" : "0",
	};

	const languages = () => {
		const graphData = {
			labels: mapData(data.languages)("title"),
			datasets: [
				{
					label: "Language Proficiency",
					backgroundColor: "rgba(255,99,132,0.2)",
					borderColor: "rgba(255,99,132,1)",
					borderWidth: 1,
					hoverBackgroundColor: "rgba(255,99,132,0.4)",
					hoverBorderColor: "rgba(255,99,132,1)",
					data: mapData(data.languages)(
						// 'metadata',
						// 'level',
						"metadata",
						"num_val"
					),
				},
			],
		};

		return graphData;
	};

	const technologies = () => {
		const graphData = {
			labels: mapData(data.technologies)("title"),
			datasets: [
				{
					label: "Technology Proficiency",
					backgroundColor: "rgba(54,162,235,0.2)",
					borderColor: "rgba(54,162,235,1)",
					borderWidth: 1,
					hoverBackgroundColor: "rgba(54,162,235,0.4)",
					hoverBorderColor: "rgba(54,162,235,1)",
					data: mapData(data.technologies)(
						// 'metadata',
						// 'level',
						"metadata",
						"num_val"
					),
				},
			],
		};

		return graphData;
	};

	const skills = () => {
		const graphData = {
			labels: mapData(data.skills)("title"),
			datasets: [
				{
					label: "Technology Proficiency",
					backgroundColor: "rgba(255,206,86,0.2)",
					borderColor: "rgba(255,206,86,1)",
					borderWidth: 1,
					hoverBackgroundColor: "rgba(255,206,86,0.4)",
					hoverBorderColor: "rgba(255,206,86,1)",
					data: mapData(data.skills)(
						// 'metadata',
						// 'level',
						"metadata",
						"num_val"
					),
				},
			],
		};

		return graphData;
	};

	const logos = () => {
		return data.companies.map((item) => {
			return (
				<picture className="flex-item logos">
					<a href={item.metadata.company_link} target="_blank">
						<img src={item.metadata.logo.url} alt="logo" />
					</a>
				</picture>
			);
		});
	};

	return (
		<PageView className="about-view" style={styles}>
			<div className="section-wrapper">
				<div className="about-section">
					<h1 className="about-header">Elevator pitch:</h1>
					<p>{data.aboutCopy.about_elevator_speech}</p>
					<p>{data.aboutCopy.about_intro}</p>
					<h1 className="about-header">Background & Availablity:</h1>
					<p>{data.aboutCopy.about_from}</p>
				</div>

				<div className="about-section graph-section">
					<h1 className="about-header graph-header">Technologies:</h1>
					<p>Technology proficiencies from "no experience" to "expert"</p>
					<div className="graph-wrapper">
						<Radar
							data={technologies()}
							redraw={true}
							options={{
								scale: {
									ticks: {
										beginAtZero: true,
										display: false,
										stepSize: 1,
									},
								},
								legend: {
									display: false,
								},
								maintainAspectRatio: false,
							}}
							width={100}
							height={100}
						/>
					</div>
				</div>

				<div className="about-section graph-section">
					<h1 className="about-header graph-header">Skills:</h1>
					<p>Skill strengths from "novice" to "expert"</p>
					<div className="graph-wrapper">
						<Radar
							data={skills()}
							redraw={true}
							options={{
								scale: {
									ticks: {
										beginAtZero: true,
										display: false,
										stepSize: 1,
									},
								},
								legend: {
									display: false,
								},
								maintainAspectRatio: false,
							}}
							width={100}
							height={100}
						/>
					</div>
				</div>

				<div className="about-section graph-section">
					<h1 className="about-header graph-header">Languages:</h1>
					<p>Language proficiencies from "tinkered with" to "expert"</p>
					<div className="graph-wrapper">
						<Radar
							data={languages()}
							redraw={true}
							options={{
								scale: {
									ticks: {
										beginAtZero: true,
										display: false,
										stepSize: 1,
									},
								},
								legend: {
									display: false,
								},
								maintainAspectRatio: false,
							}}
							width={100}
							height={100}
						/>
					</div>
				</div>

				<div className="about-section">
					<h1 className="about-header">Previous employers:</h1>
					<div className="flex-container flex-content-around">{logos()}</div>
				</div>
			</div>
		</PageView>
	);
};

export default About;
