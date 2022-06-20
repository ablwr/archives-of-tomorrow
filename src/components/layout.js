import * as React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div id="app">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
