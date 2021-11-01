// import logo from '../../Photo/secCMPSLogoEdit.png';
// import { Formik } from 'formik';
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navy from "../../Comp/Navbar/Navbar"
import './Home.css';
import logo from '../../Photo/SLU-shield.png';
function App() {
  const [activeItem, setActiveItem] = useState("/");


  useEffect(()=>{
    denyos();
  });

  function denyos(){
    if(getMobileOperatingSystem() === "Windows Phone"|| getMobileOperatingSystem() === "Android"|| getMobileOperatingSystem() === "iOS"){
      document.getElementById("overlay").style.display = "block";
      document.getElementById("AppForm").style.display = "none";
      // document.getElementsById("AppForm").style.display = "none";
    }
  }

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android" Should make Windows Phone exclusive page saying to get a new better phone
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
  }
  
  
  return (
    
    <div className="App">
      
      <Container align-items="center">
        {/* <div className="App-header"> */}
        <Navy/>
        <div id="overlay">
          <div className="AppM">
            <div className="AppM-header">
              <img src={logo} className="App-logo" width="160" height="150" alt="logo" />
              <p>We are sorry mobile is not a supported way of filling out this form</p>
              <p>We appologize for this inconvenience.</p>
            </div>
          </div>
        </div>
        <div id="overlay2">
          <div className="AppM">
            <div className="AppM-header">
              <img src={logo} className="App-logo" width="160" height="150" alt="logo" />
              <p>We are sorry but the viewport must be widder to complete this form, and if you are on mobile, you will not be able to complete the form as mobile is not supported.</p>
              <p>We appologize for this inconvenience.</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Container>
      <Container>
      <div id="AppForm">
      <div className="App-Form">
      
        <p><b>Welcome to the Online CMPS 400 Internship Form</b></p>
        <div className="App-Form-bod">
        <p>If you are a student coming to start on your CMPS 400 form please click the sign in with google button, and use your Southeastern email.</p>
        <Button variant="primary" as={Link} to="/" active={activeItem === "/"} onClick={() => setActiveItem("/")}>Signin with google placeholder</Button>{' '}
        <p>If you are a student coming to complete new parts of the form click the following button and enter your form ID in the returning student portal.</p>
        <Button variant="primary" as={Link} to="/student" active={activeItem === "/student"} onClick={() => setActiveItem("/")}>Returning Student</Button>{' '}
        <p>If you are an employer please click the following button to go to the employer portal and enter the form ID sent to you in your email</p>
        <Button variant="primary" as={Link} to="/employer" active={activeItem === "/employer"} onClick={() => setActiveItem("/")}>Employer Portal</Button>{' '}
        <p>If you are a necesary facilty member please click the following button to go to the facilty portal and enter the form ID sent to you in your email</p>
        <Button variant="primary" as={Link} to="/faculty" active={activeItem === "/faculty"} onClick={() => setActiveItem("/")}>Facilty Portal</Button>{' '}
        </div>
        
      {/* </header> */}
      </div>
      </div>
      </Container>
    </div>
  );
}

export default App;
