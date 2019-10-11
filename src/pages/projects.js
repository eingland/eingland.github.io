import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects will go here</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectPage
