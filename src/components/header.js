import PropTypes from 'prop-types'
import React from 'react'
import { Navbar } from 'react-bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faTag, faBlog, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faTag, faBlog, faSearch)

const Header = ({ siteTitle, transparent }) => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-Navbar-nav" />
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
