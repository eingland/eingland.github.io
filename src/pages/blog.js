import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PostLink from "../components/post-link"

const BlogPage = () => ({
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
        <h2>Recent Blog Posts</h2>
            <div>{Posts}</div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

export default BlogPage

