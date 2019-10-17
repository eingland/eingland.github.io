import React from 'react'

import Search from '../components/search'

import Layout from '../components/layout'
import SEO from '../components/seo'

const searchIndices = [
  { name: 'Posts', title: 'Blog Posts', hitComp: 'PostHit' }
]

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />

    <div>
      <Search indices={searchIndices} />
    </div>
  </Layout>
)

export default SearchPage
