import React from "react";
import SiteContainer from "../SiteContainer";
import MainNews from "../MainNews";
import Aside from "../Aside";
import Header from "../Header";
import Footer from "../Footer";
// eslint-disable-next-line
import _ from "../../styles/index.css";

export default ({ children }) => (
  <SiteContainer>
    <Header />
    <MainNews>{children}</MainNews>
    <Aside />
    <Footer />
  </SiteContainer>
);
