import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import PostLink from "../components/post-link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <ul>
          <li>
            <a href="http://github.com/eingland">
              <FontAwesomeIcon icon={["fab", "github"]} style={{color:"#000000"}} />
            </a>
          </li>
          <li>
            <a href="mailto:ingland.eric@gmail.com">
              <FontAwesomeIcon icon="envelope" style={{color:"#000000"}} />
            </a>
          </li>
          <li>
            <a href="http://twitter.com/ericingland">
              <FontAwesomeIcon icon={["fab", "twitter"]} style={{color:"#000000"}} />
            </a>
          </li>
          <li>
            <a href="http://linkedin.com/in/ericingland">
              <FontAwesomeIcon icon={["fab", "linkedin"]} style={{color:"#000000"}} />
            </a>
          </li>
          <li>
            <a href="http://stackoverflow.com/users/9735692/eric-ingland">
              <FontAwesomeIcon icon={["fab", "stack-overflow"]} style={{color:"#000000"}} />
            </a>
          </li>
        </ul>
        <a href="/tags">Tags</a>
        <a href="/blog">Blog</a>
        <br />
        <h2>Projects</h2>
        <div>To be added.</div>
        <br />
        <br />
        <h2>Recent Blog Posts</h2>
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