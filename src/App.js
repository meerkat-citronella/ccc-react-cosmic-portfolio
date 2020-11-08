import React, { useState, useEffect } from "react";
import Cosmic from "cosmicjs";

import About from "./components/containers/About";
import Contact from "./components/containers/Contact";
import Header from "./components/widgets/header";
import Portfolio from "./components/containers/Portfolio";
import Resume from "./components/containers/Resume";

import { keys, cosmicBucketSlug } from "./constants";

import { StyledApp } from "./app.css.js";

import "./App.css";

const App = () => {
  const [aboutData, setAboutData] = useState({});
  const [portfolioData, setPortfolioData] = useState([]);
  const [visibleSection, setVisibleSection] = useState("");
  const aboutDataSet = Object.keys(aboutData).length > 0;
  const portfolioDataSet = Object.keys(portfolioData).length > 0;

  useEffect(() => {
    const fetchCosmicData = async () => {
      // READ / WRITE KEYS -- see constants.js file, .env file
      const portfolioBucket = Cosmic().bucket({
        slug: cosmicBucketSlug,
        read_key: keys.readKey,
        write_key: keys.writeKey,
      });

      // aboutData
      const technologies = (
        await portfolioBucket.getObjectsByType({
          type_slug: "technologies",
        })
      ).objects;

      const skills = (
        await portfolioBucket.getObjectsByType({
          type_slug: "skills",
        })
      ).objects;

      const languages = (
        await portfolioBucket.getObjectsByType({
          type_slug: "languages",
        })
      ).objects;

      const companies = (
        await portfolioBucket.getObjectsByType({
          type_slug: "companies",
        })
      ).objects;

      const aboutCopy = (
        await portfolioBucket.getObject({
          slug: "about-page",
        })
      ).object.metadata;

      const aboutDataPayload = {
        technologies,
        skills,
        languages,
        companies,
        aboutCopy,
      };

      setAboutData(aboutDataPayload);

      // portfolioData
      const portfolioDataPayload = (
        await portfolioBucket.getObjectsByType({
          type_slug: "projects",
        })
      ).objects;

      setPortfolioData(portfolioDataPayload);
    };
    fetchCosmicData();
  }, []);

  const clickHandler = (event) => {
    const targetElement = event.target.getAttribute("data-view-visibility");
    setVisibleSection(targetElement);
  };

  return (
    <StyledApp className="App">
      <Header clickHandler={clickHandler} />
      <section className="home-view">
        <div className="home-picture" />
        <p className="home-tag-line" />
      </section>
      <main className="main-view">
        {aboutDataSet && (
          <About data={aboutData} isVisible={visibleSection === "ABOUT"} />
        )}
        {portfolioDataSet && (
          <Portfolio
            data={portfolioData}
            isVisible={visibleSection === "PORTFOLIO"}
          />
        )}
        <Contact isVisible={visibleSection === "CONTACT"} />
        <Resume isVisible={visibleSection === "RESUME"} />
      </main>
    </StyledApp>
  );
};

export default App;
