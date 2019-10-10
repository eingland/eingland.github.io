import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import PostLink from "../components/post-link"


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return (
      <Layout>
        <SEO title="Home" />
        
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <h1>Hi I'm Eric Ingland</h1>
        <p>A DevOps Engineer, and Software Developer.
I love all things computer science and math.
Have a look at some of my working <Link to="/projects/">projects</Link>.</p>
        <p>Contact me at <Link to="http://twitter.com/ericingland">@ericingland</Link> or by <Link to="mailto:ingland.eric@gmail.com">email</Link>.</p>
        <p>Social media icons to go here.</p>
        <br />
        <h2>Projects</h2>
        <div>To be added.</div>
        <br />
        <br />
        <h2>Blog Posts</h2>
        <div>{Posts}</div>
        <br />
      </Layout>
    );
}

export default IndexPage

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