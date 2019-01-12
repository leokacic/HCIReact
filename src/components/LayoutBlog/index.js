import React from "react";
import SiteContainerBlog from "../SiteContainerBlog";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";
// eslint-disable-next-line
import _ from "../../styles/index.css";

export default ({ children }) => (
  <SiteContainerBlog>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </SiteContainerBlog>
);
