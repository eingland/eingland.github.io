import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faTag, faBlog, faSearch } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faHome, faTag, faBlog, faSearch)

const Header = ({ siteTitle, transparent }) => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-Navbar-nav" />
      <Navbar.Collapse id="basic-Navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"><FontAwesomeIcon icon="home" /> Home</Nav.Link>
          <Nav.Link href="/blog"><FontAwesomeIcon icon="blog" /> Blog</Nav.Link>
          <Nav.Link href="/tags"><FontAwesomeIcon icon="tag" /> Tags</Nav.Link>
          {/* <Nav.Link href="/search"><FontAwesomeIcon icon="search" /> Search</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
