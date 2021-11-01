import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import logo from "../../Photo/secCMPSLogoEdit.png"
import Nav from 'react-bootstrap/Nav'
import "./Home Navbar.css"

export default function Admin(props) {

    return(
      <div className="App-headerry">
        <Navbar className="justify-content-center">
              <Navbar.Brand>
                <img
                  alt="SLU CMPS Logo"
                  src={logo}
                  width="449.66"
                  height="112"
                  className="mid"
                />{' '}
              </Navbar.Brand>
              <div id="google_translate_element"></div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link href="#home">Returning Student</Nav.Link>
                  <Nav.Link href="#home">Employer</Nav.Link>
                  <Nav.Link href="#home">Facilty</Nav.Link>
                </Nav>         
              </Navbar.Collapse>
        </Navbar>
      </div>
    );
}