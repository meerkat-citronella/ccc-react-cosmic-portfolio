import React from "react";

import { PageView } from "./view.css.js";
import Tile from "../widgets/tile";

const Portfolio = ({ isVisibile, data }) => {
	const styles = {
		width: isVisibile ? "100%" : "0",
	};

	const projectList = () => {
		return data.map((item) => {
			return <Tile info={item} />;
		});
	};

	return (
		<PageView className="portfolio-view" style={styles}>
			<div className="section-wrapper masonry-grid">{projectList()}</div>
		</PageView>
	);
};

export default Portfolio;
