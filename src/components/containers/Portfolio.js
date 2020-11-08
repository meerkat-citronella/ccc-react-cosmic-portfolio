import React from "react";

import { PageView } from "./view.css.js";
import Tile from "../widgets/tile";

const Portfolio = ({ isVisible, data }) => {
  const styles = {
    width: isVisible ? "100%" : "0",
  };

  const projectList = () =>
    data.map((item, ndx) => <Tile info={item} key={ndx} />);

  return (
    <PageView className="portfolio-view" style={styles}>
      <div className="section-wrapper masonry-grid">{projectList()}</div>
    </PageView>
  );
};

export default Portfolio;
