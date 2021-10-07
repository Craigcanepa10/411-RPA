import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import logo from "../../Photo/secCMPSLogoEdit.png"
import "./Navbar.css"

export default function Admin(props) {

    return(
      // <div className="App-header">
        <Navbar className="justify-content-center">
              <Navbar.Brand>
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
      // </div>
    );
}