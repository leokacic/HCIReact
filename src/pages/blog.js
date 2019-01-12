import React from "react";
import { graphql } from "gatsby";
import { LayoutBlog, BlogIndex } from "../components";

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <LayoutBlog>
      <h1>Blog posts</h1>
      <BlogIndex posts={posts} />
    </LayoutBlog>
  );
};

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
