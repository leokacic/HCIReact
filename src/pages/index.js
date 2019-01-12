import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";
import MainNews from "../components/MainNews";

export default ({
  data: {
    site: {
      siteMetadata: { title, description }
    }
  }
}) => {
  return (
    <Layout>
    <MainNews> 
      <h1>Kultura</h1>
    </MainNews>
  </Layout>
  );
};

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
