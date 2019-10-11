import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import PostLink from "../components/post-link"

const BlogPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => {
    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  
      return (
        <Layout>
          <SEO title="Blog" />
          
          <h2>Blog Posts</h2>
          <div>{Posts}</div>
          <br />
        </Layout>
      );
  }

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`