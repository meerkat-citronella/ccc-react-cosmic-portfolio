import React, { Component } from "react";
import Cosmic from "cosmicjs";

import About from "./components/containers/About";
import Contact from "./components/containers/Contact";
import Header from "./components/widgets/header";
import Portfolio from "./components/containers/Portfolio";
import Resume from "./components/containers/Resume";

import { keys, cosmicBucketSlug } from "./constants";

import { StyledApp } from "./app.css.js";

import "./App.css";

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
    portfolioData: [],
    visibleSection: "",
  };

  componentWillMount = async () => {
    // READ / WRITE KEYS - Recommended to use dotenv NPM package to pass enviornment variables.
    const portfolioBucket = Cosmic().bucket({
      slug: cosmicBucketSlug,
      read_key: keys.readKey,
      write_key: keys.writeKey,
    });
    const cmsBucket = await portfolioBucket.getBucket();

    let technologies = await portfolioBucket.getObjectsByType({
      type_slug: "technologies",
    });

    technologies = technologies.objects;

    let skills = await portfolioBucket.getObjectsByType({
      type_slug: "skills",
    });
    skills = skills.objects;

    let languages = await portfolioBucket.getObjectsByType({
      type_slug: "languages",
    });
    languages = languages.objects;

    let companies = await portfolioBucket.getObjectsByType({
      type_slug: "companies",
    });
    companies = companies.objects;

    const projects = await portfolioBucket.getObjectsByType({
      type_slug: "projects",
    });
    const portfolioData = projects.objects;

    const aboutContent = await portfolioBucket.getObject({
      slug: "about-page",
    });
    const aboutCopy = aboutContent.object.metadata;

    const aboutData = {
      technologies,
      skills,
      languages,
      companies,
      aboutCopy,
    };

    return this.setState({ cmsBucket, aboutData, portfolioData });
  };

  clickHandler = (event) => {
    const targetElement = event.target.getAttribute("data-view-visibility");
    return this.setState({ visibleSection: targetElement });
  };

  render() {
    return (
      <StyledApp className="App">
        <Header clickHandler={this.clickHandler} />
        <section className="home-view">
          <div className="home-picture" />
          <p className="home-tag-line" />
        </section>
        <main className="main-view">
          <About
            data={this.state.aboutData}
            isVisible={this.state.visibleSection === "ABOUT"}
          />
          <Portfolio
            data={this.state.portfolioData}
            isVisible={this.state.visibleSection === "PORTFOLIO"}
          />
          <Contact isVisible={this.state.visibleSection === "CONTACT"} />
          <Resume isVisible={this.state.visibleSection === "RESUME"} />
        </main>
      </StyledApp>
    );
  }
}

export default App;
