// import logo from '../../Photo/secCMPSLogoEdit.png';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navy from "../../Comp/Navbar/Navbar"
import './Form.css';

function App() {
  const [name, getname] = useState("");
  const [wnum, getwnum] = useState("");
  const [email, getemail] = useState("");
  const [cellnum, getcellnum] = useState("");
  const [homenum, gethomenum] = useState("");
  const [worknum, getworknum] = useState("");
  // const [ven, setvenue] =useState("");
  // const [vencap, getvenuecap] = useState(0)
  // const [cap, setcap] = useState(0);
  // const [room, setroom] = useState("");
  // const [approval, setapproval] = useState(false);

  useEffect(()=>{
    denyos();
  });

  function denyos(){
    if(getMobileOperatingSystem() === "Windows Phone"|| getMobileOperatingSystem() === "Android"|| getMobileOperatingSystem() === "iOS"){
      document.getElementById("overlay").style.display = "block";
    }
  }

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
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
  
  console.log(name, wnum, email, cellnum, homenum, worknum)

  
  return (
    
    <div className="App">
      
      <Container align-items="center">
        {/* <div className="App-header"> */}
        <Navy/>
        <div id="overlay">
          <p>We are sorry mobile is not supported at the moment.</p>
        </div>
        {/* </div> */}
      </Container>
      <div className="App-Form">
      
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Label>Name:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> getname(e.target.value)}/>
            </Col>

            <Col xs="auto">
              <Form.Label>W#:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter W#" onChange={(e)=> getwnum(e.target.value)}/>
            </Col>

            <Col xs="auto">
              <Form.Label>Email:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Enter Email" onChange={(e)=> getemail(e.target.value)}/>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row>
            <Col xs="auto">
              <Form.Label>Cell Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="tel" maxlength="14" id="phoneNumber" placeholder="Enter Your Phone Number" onChange={(e)=> getcellnum(e.target.value)}/>
            </Col>
            <Col xs="auto">
              <Form.Label>Home Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="tel" placeholder="Enter Your Home Phone Number" onChange={(e)=> gethomenum(e.target.value)}/>
            </Col>
            <Col xs="auto">
              <Form.Label>Work Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="tel" placeholder="Enter Your Work Phone Number" onChange={(e)=> getworknum(e.target.value)}/>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      {/* </header> */}
      </div>
    </div>
  );
}

export default App;
