import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IndexPage = () => (
  <Layout>
        <SEO title="Home" />
        
        <div style={{ maxWidth: `400px`, margin: `0 auto`, marginBottom: `1.45rem`, justifyContent: 'center',
    alignItems: 'center'}}>
          <Image />
        </div>
        <h1>Hi I'm Eric Ingland</h1>
        <p>A DevOps Engineer, and Software Developer.
          I love all things computer science and math.
          Have a look at my <Link to="/blog/">blog</Link>.</p>
        <p>Contact me at <Link to="http://twitter.com/ericingland">@ericingland</Link> or by <Link to="mailto:ingland.eric@gmail.com">email</Link>.</p>
        <ul style={{ display: "flex", flex: 1 }}>
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
      </Layout>
)

export default IndexPage
