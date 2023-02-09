import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';

import './style.css';

import ProfilePicture from "../../assets/images/1043077.png";

const Header = props => {

  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" fixed="top" id="navbar">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand><img src={ProfilePicture} alt="Profile picture" className="profile-picture"></img>Jon Harrison</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
              <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
              <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
              {/* <Nav.Link href="./assets/files/CV.pdf" target="_blank" rel="noopener noreferrer">Resume</Nav.Link> */}
              {/* <Nav.Link><a href="./assets/files/CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
