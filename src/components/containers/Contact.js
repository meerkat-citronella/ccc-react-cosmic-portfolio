import React from "react";

import { PageView } from "./view.css.js";
import { FlexBox } from "./flexbox.css.js";
import { GithubButton, DevpostButton } from "../widgets/buttons";

const Contact = ({ isVisible }) => {
  const styles = {
    width: isVisible ? "100%" : "0",
  };

  return (
    <PageView className="contact-view" style={styles}>
      <FlexBox>
        <p>
          <a className="contact-link" href="mailto:carterchencodes@gmail.com">
            carterchencodes@gmail.com
          </a>
        </p>
        <GithubButton
          url={"https://github.com/meerkat-citronella"}
          textContent={"Follow @meerkat-citronella"}
        />
        <DevpostButton
          url={
            "https://devpost.com/cartercwchen?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          }
          textContent={"My Devpost portfolio"}
        />
      </FlexBox>
    </PageView>
  );
};

export default Contact;
