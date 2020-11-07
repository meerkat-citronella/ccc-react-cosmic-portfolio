import React from "react";

import { PageView } from "./view.css.js";

const Contact = ({ isVisible }) => {
  const styles = {
    width: isVisible ? "100%" : "0",
  };

  return (
    <PageView className="contact-view" style={styles}>
      <p>
        <a className="contact-link" href="mailto:carterchencodes@gmail.com">
          carterchencodes@gmail.com
        </a>
      </p>
    </PageView>
  );
};

export default Contact;
