import React from "react";

import ResumePDF from "./../../assets/carter-chen-resume.pdf";
import { PageView } from "./view.css.js";
import { FlexBox } from "./flexbox.css.js";

const Resume = ({ isVisible }) => {
  const styles = {
    width: isVisible ? "100%" : "0",
  };

  return (
    <PageView className="resume-view" style={styles}>
      <FlexBox>
        <p>
          <a className="contact-link" href={ResumePDF} target="_blank">
            Download my r&#233;sum&#233;
          </a>
        </p>
      </FlexBox>
    </PageView>
  );
};

export default Resume;
