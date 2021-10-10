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

          <Form.Group className="mb-3" controlId="formPresAddress">
            <Form.Label>Present Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPermAddress">
            <Form.Label>Permanent Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formDegree">
              <Form.Label>Degree</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formConcentration">
              <Form.Label>Concentration</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSemHoursEarned">
              <Form.Label>Semester Hours Earned</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formMajorGPA">
              <Form.Label>Major GPA</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formExpGradDate">
              <Form.Label>Expected Graduation Date</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formEmpName">
            <Form.Label>Employer’s Name</Form.Label>
            <Form.Control placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmpAddr">
            <Form.Label>Employer's Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNTIS">
            <Form.Label>Name and Title of Immediate Supervisor</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSupEmail">
              <Form.Label>Supervisor’s E-Mail</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formSupPhoneNum">
              <Form.Label>Supervisor’s Phone #</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formDate">
            <label>Proposed Dates of Employment</label>
            <Row>
              <Col xs="auto">
                <Form.Label>Start:</Form.Label>
              </Col>
              <Col>
                <input type="date" name="dateofbirth" id="dateofbirth"></input>
              </Col>

              <Col xs="auto">
                <Form.Label>End:</Form.Label>
              </Col>
              <Col>
                <input type="date" name="dateofbirth" id="dateofbirth"></input>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Col} controlId="formEmployed">
            <label>Employed:</label>
            <Row>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="part-time (at least 20 hours per week)" />
                </Form.Group>
              </Col>

              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label=" full-time (at least 40 hours per week)" />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formJobTitle">
            <Form.Label>Job Title</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formJobResp">
            <Form.Label>Job Responsibilities</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form>NOTE: A copy of your college transcript must be submitted with this application! You may print a copy from Leonet.</Form>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSig">
              <Form.Label>Signature of Student</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formDate2">
              <Form.Label>Date</Form.Label>
              <input type="date" name="dateofbirth" id="dateofbirth"></input>
            </Form.Group>
          </Row>

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
