import Navbar from 'react-bootstrap/Navbar'
import React, { useState } from 'react';
import logo from "../../Photo/secCMPSLogoEdit.png"
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Admin(props) {
  const [activeItem, setActiveItem] = useState("/");


    return(
      <div className="App-headerry">
        <Navbar className="justify-content-center">
              <Navbar.Brand
              as={Link}
              to="/"
              active={activeItem === "/"}
              onClick={() => setActiveItem("/")}>
                <img
                  alt="logo"
                  src={logo}
                  width="449.66"
                  height="112"
                  className="mid"
                />{' '}
              </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">             
            </Navbar.Collapse> */}
        </Navbar>
        {/* ZACK PUT WHAT IS BELOW THIS COMMENT INTO YOUR SITES NAV BAR */}
        <Navbar className="justify-content-center">
        <div id="google_translate_element"></div>
        </Navbar>
        {/* Made a build fix */}
        {/* ZACK PUT WHAT IS ABOVE THIS COMMENT INTO YOUR SITES NAV BAR */}
      </div>
    );
}