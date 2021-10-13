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

          <Form.Group className="mb-3">
            <Form>DO NOT WRITE BELOW THIS LINE</Form>
          </Form.Group>

          <Form.Group as={Col} controlId="formDate">
            <Row>
              <Col xs="auto">
                <Form.Label>Date Application Received by Department</Form.Label>
              </Col>
              <Col>
                <input type="date" name="dateofbirth" id="dateofbirth"></input>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Col} controlId="formEmployed">
            <label>Action Taken:</label>
            <Row>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Approved" />
                </Form.Group>
              </Col>

              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Not Approved " />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formReasons">
            <Form.Label>Reason(s)</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSig">
              <Form.Label>Faculty Signature</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formDate2">
              <Form.Label>Date</Form.Label>
              <input type="date" name="dateofbirth" id="dateofbirth"></input>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSig">
              <Form.Label>Department Head’s Signature</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formDate2">
              <Form.Label>Date</Form.Label>
              <input type="date" name="dateofbirth" id="dateofbirth"></input>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSig">
              <Form.Label>Dean’s Signature</Form.Label>
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

          <Form.Group className="mb-3">
            <Form>Internship Employer Agreement</Form>
          </Form.Group>

          <Row>
            <Col xs="auto">
              <Form.Label></Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> getname(e.target.value)}/>
            </Col>

            <Col xs="auto">
              <Form.Label>will be employed by</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter W#" onChange={(e)=> getwnum(e.target.value)}/>
            </Col>

            <Col xs="auto">
              <Form.Label>during the semester</Form.Label>
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Enter Email" onChange={(e)=> getemail(e.target.value)}/>
            </Col>

            <Col xs="auto">
              <Form.Label>20</Form.Label>
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Enter Email" onChange={(e)=> getemail(e.target.value)}/>
            </Col>

            <Col xs="auto">
              <Form.Label>The student will work</Form.Label>
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Enter Email" onChange={(e)=> getemail(e.target.value)}/>
            </Col>

            <Col xs="auto">
              <Form.Label>hours per week for the semester beginning</Form.Label>
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Enter Email" onChange={(e)=> getemail(e.target.value)}/>
            </Col>

            <Col xs="auto">
              <Form.Label>and ending on</Form.Label>
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Enter Email" onChange={(e)=> getemail(e.target.value)}/>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form>CONDITIONS OF AGREEMENT</Form>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form>1. The employer must provide workers compensation coverage for the student intern. </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form>2. The student is expected to be employed 20 hours per week for three hours of credit during the fall and
            spring semesters, or for 40 hours per week for three hours of credit for the summer semester. </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form>4. All employment transfers, withdrawals, or dismissals shall be made jointly by the Department Head,
              student, and employer. </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form>5. Students must submit the following completed forms and all other assignments by 4:00 p.m. on the last
            class day of the semester: </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form>• Students Evaluation of the Internship Employer CS Form 410 Students Measurable Learning
Objectives CS Form 403 </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form>• The Employers Evaluation of the internship Student CS Form 420</Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form>• Time and Wage Report CS Form 404</Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form>• Activity Log CS Form 405  Three Activity Reports </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form>• Three Page Executive Summary </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form>I have read the above agreement and agree in full to the conditions set forth. </Form>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSig">
              <Form.Label>Employer's Signature</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formDate2">
              <Form.Label>Date</Form.Label>
              <input type="date" name="dateofbirth" id="dateofbirth"></input>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formEmpAddr">
            <Form.Label>Employer's Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSig">
              <Form.Label>Student's Signature</Form.Label>
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

          <Form.Group className="mb-3">
            <Form> Student’s Measurable Learning Objectives </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form> The objectives must be specific to the student’s job and must clearly describe what the student plans to accomplish during
              the work experience. They must be reviewed by the student’s immediate supervisor, who may suggest changes or
              additions.
              At the end of the semester, the student’s supervisor must evaluate the extent to which the student accomplished each of
              the objectives by assigning a percentage figure from 0% to 100% in the column to the right of the objective.
              Note: Before submitting this form at the beginning of the semester, students must provide a copy to their immediate
              supervisor to complete at the end of the semester.</Form>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmpAddr">
            <Form.Label>I will accomplish the following objectives by the conclusion of the semester.</Form.Label>
            <Form.Control placeholder="1" />
            <Row>
            <Col xs="auto">
              <Form.Label>Supervisor’s Rating (%)</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> getname(e.target.value)}/>
            </Col>
          </Row>
            <Form.Control placeholder="2" />
            <Row>
            <Col xs="auto">
              <Form.Label>Supervisor’s Rating (%)</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> getname(e.target.value)}/>
            </Col>
          </Row>
            <Form.Control placeholder="3" />
            <Row>
            <Col xs="auto">
              <Form.Label>Supervisor’s Rating (%)</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> getname(e.target.value)}/>
            </Col>
          </Row>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSig">
              <Form.Label>Student’s Approval Signature</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formDate2">
              <Form.Label>Date</Form.Label>
              <input type="date" name="dateofbirth" id="dateofbirth"></input>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSig">
              <Form.Label>Supervisor’s Approval Signature</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formDate2">
              <Form.Label>Date</Form.Label>
              <input type="date" name="dateofbirth" id="dateofbirth"></input>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formSig">
              <Form.Label>Internship Coordinator Signature</Form.Label>
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
