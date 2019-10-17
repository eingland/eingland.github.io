import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCalendarAlt, faTags)

export default function Template ({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h4><FontAwesomeIcon icon='calendar-alt' /> {frontmatter.date}</h4>
          <h4><FontAwesomeIcon icon='tags' />&nbsp;
            {frontmatter.tags.map((tag, index) => (
              <>
                {index > 0 && ', '}
                {tag}
              </>
            ))}
          </h4>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`
