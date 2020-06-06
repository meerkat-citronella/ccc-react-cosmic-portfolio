import React from "react";
import { Card, Label } from "semantic-ui-react";

import { getNestedObject, mapData } from "../../lib/helpers";
import "../../App.css";

const Tile = ({ info }) => {
	const getTags = () => {
		const languagesArr = getNestedObject(info, ["metadata", "languages"]);

		const technologiesArr = getNestedObject(info, ["metadata", "technologies"]);
		const technologies = technologiesArr.map((item) => {
			return item.title;
		});

		// to account for projects that don't have any tagged 'languages'
		let languages, tags;
		languagesArr
			? (languages = languagesArr.map((item) => {
					return item.title;
			  }))
			: (languages = undefined);

		languages ? (tags = languages.concat(technologies)) : (tags = technologies);

		return tags.map((tagName) => (
			<Label className="portfolio-tag">{tagName}</Label>
		));
	};

	// Ideally, would parse and remove <script> tags
	function createMarkup() {
		let markupObj = {
			__html: getNestedObject(info, ["metadata", "description"]),
		};

		return markupObj;
	}

	const cardStyle = {
		display: "inline-block",
		width: "100%",
		margin: "10px 0",
	};

	return (
		<Card style={cardStyle}>
			<picture>
				<img src={getNestedObject(info, ["metadata", "main_image", "url"])} />
			</picture>
			<Card.Content>
				<Card.Header>{getNestedObject(info, ["title"])}</Card.Header>
				<Card.Description
					dangerouslySetInnerHTML={createMarkup()}
					className="card-description"
				/>
			</Card.Content>
			<Card.Content extra className="flex-container">
				<Label.Group color="black">{getTags()}</Label.Group>
			</Card.Content>
		</Card>
	);
};

export default Tile;
