import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-Navbar-nav" />
      <Navbar.Collapse id="basic-Navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/tags">Tags</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
