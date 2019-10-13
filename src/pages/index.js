import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{ textAlign: 'center' }}>
      <div style={{
        maxWidth: '400px',
        margin: '0 auto',
        marginBottom: '1.45rem',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image />
      </div>
      <h1>Hi, I'm Eric Ingland!</h1>
      <p>I'm a <b>DevOps Engineer</b>.
            I love all things computer science.
            Come have a look at my <Link to="/blog/">blog</Link> or my projects on <a href="http://github.com/eingland">Github</a>.</p>
      <p>Contact me at <a href="http://twitter.com/ericingland">@ericingland</a> or by <a href="mailto:ingland.eric@gmail.com">email</a>.</p>
      <ul style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <li className="nav-link">
          <a href="http://github.com/eingland">
            <FontAwesomeIcon icon={['fab', 'github']} style={{ color: '#000000' }} />
          </a>
        </li>
        <li className="nav-link">
          <a href="mailto:ingland.eric@gmail.com">
            <FontAwesomeIcon icon="envelope" style={{ color: '#000000' }} />
          </a>
        </li>
        <li className="nav-link">
          <a href="http://twitter.com/ericingland">
            <FontAwesomeIcon icon={['fab', 'twitter']} style={{ color: '#000000' }} />
          </a>
        </li>
        <li className="nav-link">
          <a href="http://linkedin.com/in/ericingland">
            <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ color: '#000000' }} />
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
