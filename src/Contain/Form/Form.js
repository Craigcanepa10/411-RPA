// import logo from '../../Photo/secCMPSLogoEdit.png';
// import { Formik } from 'formik';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navy from "../../Comp/Navbar/Navbar"
import './Form.css';
import logo from '../../Photo/SLU-shield.png';
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
  
  console.log(name, wnum, email, cellnum, homenum, worknum)

  
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
      
        <Form>

          <Form.Group className="mb-3">
            <Form.Label><b>CS Form 401: Application for Internship</b></Form.Label>
          </Form.Group>

          <Row id="FIX">
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

          <Row id="FIX">
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
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Present Address:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="1234 Main St" />
            </Col>

            <Col xs="auto">
              <Form.Label>Permanent Address:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="1234 Main St" />
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Degree:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Your Degree"/>
            </Col>
            {/* <Col xs="auto">
              <Form.Label>Concentration: </Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Your Concentration"/>
            </Col> */}
          </Row>
          <Form.Label></Form.Label>
          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Semester Hours Earned:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Total Hours Earned"/>
            </Col>
            <Col xs="auto">
              <Form.Label>Major GPA:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="GPA of your major classes"/>
            </Col>
            <Col xs="auto">
              <Form.Label>Expected Graduation Date:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Fall 2022"/>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Employer’s Name:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter Employer's Name" />
            </Col>
            <Col xs="auto">
              <Form.Label>Employer's Address:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="1234 Main St" />
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Name and Title of Immediate Supervisor:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Johnny Appleseed Apple placehoder guy" />
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row  id="FIX">
            <Col xs="auto">
              <Form.Label>Supervisor’s E-Mail:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter Your Supervisors Email here"/>
            </Col>
            <Col xs="auto">
              <Form.Label>Supervisor’s Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter Your Supervisors Phone # here"/>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Proposed Dates of Employment:</Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Label>Start:</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control type="date"/>
              {/* <input type="date" name="dateofbirth" id="dateofbirth"></input> */}
            </Col>

            <Col sm="auto">
              <Form.Label>End:</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control type="date"/>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Employed:</Form.Label>
            </Col>
            <Col xs="auto">
                <Form.Label></Form.Label>
            </Col>
            <Col xs="auto">
                <Form.Check type="checkbox" label="part-time (at least 20 hours per week)" />
            </Col>

            <Col xs="auto">
              <Form.Label></Form.Label>
            </Col>
            <Col xs="auto">
                <Form.Check type="checkbox" label="full-time (at least 40 hours per week)" />
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Job Title:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter your Job title" />
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Job Responsibilities:</Form.Label>
            </Col>
            <Col>
              <textarea name="message" rows="2" cols="115" placeholder="As English speaking professionals we have the button on the left, and the lable on the right"></textarea>
              {/* <Form.Control placeholder="Enter the responcibilities of your job" /> */}
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form align='left'><b>NOTE: A copy of your college transcript must be submitted with this application! You may print a copy from Leonet.</b></Form>
          </Form.Group>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Signature of Student:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Type your digital signature here"/>
            </Col>
            <Col xs="auto">
              <Form.Label>Date:</Form.Label>
              </Col>
            <Col xs={2}>
              <Form.Control type="date"/>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form>DO NOT WRITE BELOW THIS LINE</Form>
          </Form.Group>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Date Application Received by Department:</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control type="date"/>
            </Col>
          </Row>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Action Taken:</Form.Label>
            </Col>
            <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                  <Form.Check type="checkbox" label="Approved" />
              </Col>

              <Col xs="auto">
                  <Form.Check type="checkbox" label="Not Approved " />
              </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Reason(s):</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Reasons for Aproval or denial" />
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Faculty Signature:</Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Check type="checkbox" label="Digital signature" />
            </Col>
            <Col xs="auto">
              <Form.Label>Date:</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control type="date"/>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Department Head's Signature:</Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Check type="checkbox" label="Digital signature" />
            </Col>
            <Col xs="auto">
              <Form.Label>Date:</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control type="date"/>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Dean's Signature:</Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Check type="checkbox" label="Digital signature" />
            </Col>
            <Col xs="auto">
              <Form.Label>Date:</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control type="date"/>
            </Col>
          </Row>

          <div class="wrapper">
            <div class="divider div-transparent"></div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label><b>CS Form 402</b></Form.Label>
            <Form.Label><b>Internship Employer Agreement</b></Form.Label>
          </Form.Group>

          <Row>
            <Col>
              <Form.Control type="text" placeholder="Student Name" onChange={(e)=> getname(e.target.value)}/>
            </Col>

            <Col xs="auto">
              <Form.Label>will be employed by</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Company Name" onChange={(e)=> getwnum(e.target.value)}/>
            </Col>
          </Row>
          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>during the semester</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter semester and year"/>
            </Col>
          </Row>

          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>The student will work</Form.Label>
            </Col>
            <Col xs={3}>
              <Form.Control type="text" placeholder="Enter hours" onChange={(e)=> getname(e.target.value)}/>
            </Col>

            <Col xs="auto">
              <Form.Label>hours per week for the semester beginning</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control type="date"/>
            </Col>
            <Col xs="auto">
              <Form.Label>, and</Form.Label>
            </Col>
          </Row>

          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>ending on</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control type="date"/>
            </Col>
          </Row>


          <Form.Group className="mb-3">
            <Form><b>CONDITIONS OF AGREEMENT</b></Form>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form align='left'><b>1.</b> The employer must provide workers compensation coverage for the student intern. </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form align='left'><b>2.</b> The student is expected to be employed 20 hours per week for three hours of credit during the fall and
            spring semesters, or for 40 hours per week for three hours of credit for the summer semester. </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form align='left'><b>3.</b> All employment transfers, withdrawals, or dismissals shall be made jointly by the Department Head,
              student, and employer. </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form align='left'><b>4.</b> Students must submit the following completed forms and all other assignments by 4:00 p.m. on the last
            class day of the semester: </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form align='left'>• Students Evaluation of the Internship Employer CS Form 410 Students Measurable Learning
            Objectives CS Form 403 </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form align='left'>• The Employers Evaluation of the internship Student CS Form 420</Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form align='left'>• Time and Wage Report CS Form 404</Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form align='left'>• Activity Log CS Form 405  Three Activity Reports </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form align='left'>• Three Page Executive Summary </Form>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form align='left'>I have read the above agreement and agree in full to the conditions set forth. </Form>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} xs={7}>
              <Form.Check type="checkbox"/>
              <Form.Label>Employer's Digital Signature</Form.Label>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Control type="date"/>
              <Form.Label>Date</Form.Label>
            </Form.Group>
          </Row>
          <Form.Label></Form.Label>

          <Row>
            <Col>
              <Form.Control placeholder="1234 Main St" />
              <Form.Label>Employer's Address</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter your City" />
              <Form.Label>City</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter your State" />
              <Form.Label>State</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter your zip code" />
              <Form.Label>Zip Code</Form.Label>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row className="mb-3">
            <Form.Group as={Col} xs={7}>
              <Form.Check type="checkbox"/>
              <Form.Label>Student's Digital Signature</Form.Label>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Control type="date"/>
              <Form.Label>Date</Form.Label>
            </Form.Group>
          </Row>
          <Form.Label></Form.Label>

          <div class="wrapper">
            <div class="divider div-transparent"></div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label><b>CS Form 403</b></Form.Label>
            <Form.Label><b>Student’s Measurable Learning Objectives</b></Form.Label>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form align='left'> The objectives must be specific to the student’s job and must clearly describe what the student plans to accomplish during
              the work experience. They must be reviewed by the student’s immediate supervisor, who may suggest changes or
              additions.
              At the end of the semester, the student’s supervisor must evaluate the extent to which the student accomplished each of
              the objectives by assigning a percentage figure from 0% to 100% in the column to the right of the objective.
            </Form>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form align='left'><b> Note:</b> Before submitting this form at the beginning of the semester, students must provide a copy to their immediate
            supervisor to complete at the end of the semester.
            </Form>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmpAddr">
            <Form.Label>I will accomplish the following objectives by the conclusion of the semester.
            </Form.Label>
          </Form.Group>
          <Form.Label></Form.Label>
          <Form.Group as={Col} controlId="formEmployed">
            <Row>
              <Col xs="auto">
                <Form.Label>1.</Form.Label>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="" onChange={(e)=> getname(e.target.value)}/>
              </Col>

              <Col xs="auto">
                <Form.Label>Supervisor’s Rating (%)</Form.Label>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Enter %" onChange={(e)=> getname(e.target.value)}/>
              </Col>
            </Row>
          </Form.Group>
          <Form.Label></Form.Label>
          <Form.Group as={Col} controlId="formEmployed">
            <Row>
              <Col xs="auto">
                <Form.Label>2.</Form.Label>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="" onChange={(e)=> getname(e.target.value)}/>
              </Col>

              <Col xs="auto">
                <Form.Label>Supervisor’s Rating (%)</Form.Label>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Enter %" onChange={(e)=> getname(e.target.value)}/>
              </Col>
            </Row>
          </Form.Group>
          <Form.Label></Form.Label>
          <Form.Group as={Col} controlId="formEmployed">
            <Row>
              <Col xs="auto">
                <Form.Label>3.</Form.Label>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="" onChange={(e)=> getname(e.target.value)}/>
              </Col>

              <Col xs="auto">
                <Form.Label>Supervisor’s Rating (%)</Form.Label>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Enter %" onChange={(e)=> getname(e.target.value)}/>
              </Col>
            </Row>
          </Form.Group>

          <Form.Label></Form.Label>
          <Row className="mb-3">
            <Form.Group as={Col} xs={7}>
              <Form.Label>Student's Digital Signature</Form.Label>
              <Form.Check type="checkbox"/>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Row>
          <Form.Label></Form.Label>

          <Row className="mb-3">
            <Form.Group as={Col} xs={7}>
              <Form.Label>Supervisor’s Digital Signature</Form.Label>
              <Form.Check type="checkbox"/>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={7}>
              <Form.Label>Internship Coordinator’s Digital Signature</Form.Label>
              <Form.Check type="checkbox"/>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Row>

          <div class="wrapper">
            <div class="divider div-transparent"></div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label><b>CS Form 404</b></Form.Label>
            <Form.Label><b>STUDENT’S TIME AND WAGE REPORT</b></Form.Label>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form align='left'>The student must maintain an accurate account of the dates and the hours worked on the job. This information is necessary
              for Departmental records and will be kept strictly confidential. </Form>
          </Form.Group>

          <Row>
            <Col xs="auto">
              <Form.Label>Student’s name:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter Student Name"/>
            </Col>

            <Col xs="auto">
              <Form.Label>Total hours for semester:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter total hours for semester"/>
            </Col>
          </Row>
          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>Employer name:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter employer's name"/>
            </Col>

            <Col xs="auto">
              <Form.Label>Total wages for deductions:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter total wages for deductions"/>
            </Col>
          </Row>
          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>Month:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="" onChange={(e)=> getname(e.target.value)}/>
            </Col>
          </Row>

          <table>
            <tr>
              <th>Weeks</th>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>Th</th>
              <th>F</th>
              <th>S</th>
              <th>Total Hours</th>
              <th>Weekly Wages</th>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                Monthly Totals:
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
          </table>
          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>Month:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="" onChange={(e)=> getname(e.target.value)}/>
            </Col>
          </Row>

          <table>
            <tr>
              <th>Weeks</th>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>Th</th>
              <th>F</th>
              <th>S</th>
              <th>Total Hours</th>
              <th>Weekly Wages</th>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                Monthly Totals:
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
          </table>

          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>Month:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="" onChange={(e)=> getname(e.target.value)}/>
            </Col>
          </Row>

          <table>
            <tr>
              <th>Weeks</th>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>Th</th>
              <th>F</th>
              <th>S</th>
              <th>Total Hours</th>
              <th>Weekly Wages</th>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                Monthly Totals:
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
          </table>

          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>Month:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="" onChange={(e)=> getname(e.target.value)}/>
            </Col>
          </Row>

          <table>
            <tr>
              <th>Weeks</th>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>Th</th>
              <th>F</th>
              <th>S</th>
              <th>Total Hours</th>
              <th>Weekly Wages</th>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                Monthly Totals:
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox"/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox2">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
                <Form.Group as={Col} controlId="formBox3">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
          </table>

          <Form.Group className="mb-3">
            <Form>I certify that the above time report is a true statement of the hours worked.</Form>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} xs={7}>
              <Form.Label>Student's Digital Signature</Form.Label>
              <Form.Check type="checkbox"/>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>

            <Form.Group as={Col} xs={7}>
              <Form.Label>Employer Supervisor’s Digital Signature</Form.Label>
              <Form.Check type="checkbox"/>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Row>
{/* changes here */}


          <div class="wrapper">
            <div class="divider div-transparent"></div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label><b>CS Form 420</b></Form.Label>
            <Form.Label><b>Employer's Evaluation of the Computer Science Internship Student</b></Form.Label>
          </Form.Group>

          <Row>
            <Col xs="auto">
              <Form.Label>Student’s name:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter Student Name"/>
            </Col>

            <Col xs="auto">
              <Form.Label>Job Title:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter student's job title"/>
            </Col>
          </Row>
          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>Semester:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter semester"/>
            </Col>

            <Col xs="auto">
              <Form.Label>Employer:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter your employer"/>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row>
            <Col xs="auto">
              <Form.Label>Date</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control type="date"/>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form align='left'>INSTRUCTIONS:
              The immediate supervisor will evaluate the student objectively, comparing him/her with other students of
              comparable academic level, with other personnel assigned the same or similarly classified jobs, or with individual
              standards. </Form>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form>RELATIONS WITH OTHERS</Form>
          </Form.Group>
          <table>
            <tr>
              <th>Exceptionally well accepted</th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Works well with others </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Gets along satisfactorily </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Has some difficulty working with others</th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Works very poorly with others</th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>  
          </table>

          <Form.Group className="mb-3">
            <Form>ATTITUDE -- APPLICATION TO WORK </Form>
          </Form.Group>
          <table>
            <tr>
              <th>Outstanding in enthusiasm</th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Very interested and industrious </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Average in diligence and interest</th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Somewhat indifferent</th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Definitely not interested </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>  
          </table>

          <Form.Group className="mb-3">
            <Form>JUDGMENT </Form>
          </Form.Group>
          <table>
            <tr>
              <th>Exceptionally mature </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Above average in making decisions </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Usually makes the right decision </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Often uses poor judgment </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Consistently uses bad judgment  </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>  
          </table>

          <Form.Group className="mb-3">
            <Form>DEPENDABILITY </Form>
          </Form.Group>
          <table>
            <tr>
              <th>Completely dependable </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Above average in dependability </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Usually dependable </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Sometimes neglectful or careless </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Unreliable  </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>  
          </table>

          <Form.Group className="mb-3">
            <Form>ABILITY TO LEARN </Form>
          </Form.Group>
          <table>
            <tr>
              <th>Learns very quickly  </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Learns readily  </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Average in learning </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Rather slow to learn  </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Very slow to learn   </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>  
          </table>

          <Form.Group className="mb-3">
            <Form>QUALITY OF WORK </Form>
          </Form.Group>
          <table>
            <tr>
              <th>Excellent  </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Very good  </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Average </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Below average </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>
            <tr>
              <th>Very poor   </th>
                <th>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox"/>
                  </Form.Group>
                </th>
            </tr>  
          </table>
            <Row>
              <Col xs="auto">
                <Form.Label>ATTENDANCE:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Regular" />
                </Form.Group>
              </Col>

              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Irregular" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Label></Form.Label>
            <Row>
              <Col xs="auto">
                <Form.Label>PUNCTUALITY:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Regular" />
                </Form.Group>
              </Col>

              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Irregular" />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col xs="auto">
                <Form.Label>Overall Performance:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Outstanding" />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Very Good" />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Average" />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Marginal" />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Unsatisfactory" />
                </Form.Group>
              </Col>
            </Row>

          <Row>
            <Col xs="auto">
              <Form.Label>REMARKS:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="" />
            </Col>
          </Row>
          <Form.Label></Form.Label>

            <Row>
              <Col xs="auto">
                <Form.Label>This report has been discussed with student:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Yes" />
                </Form.Group>
              </Col>

              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="No" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} xs={7}>
              <Form.Label>Student's Digital Signature</Form.Label>
              <Form.Check type="checkbox"/>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>

            <Form.Group as={Col} xs={7}>
              <Form.Label>Immediate Supervisor’s Digital Signature</Form.Label>
              <Form.Check type="checkbox"/>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Row>

          <Row>
            <Col xs="auto">
              <Form.Label>Print Supervisors Name:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter Supervisors Name"/>
            </Col>
            <Col xs="auto">
              <Form.Label>Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter Supervisors phone number"/>
            </Col>
          </Row>

          <div class="wrapper">
            <div class="divider div-transparent"></div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label><b>CS Form 410</b></Form.Label>
            <Form.Label><b>Student's Evaluation of Internship Employer</b> </Form.Label>
          </Form.Group>

          <Row>
            <Col xs="auto">
              <Form.Label>Employer's Name:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter the Employer's Name"/>
            </Col>
            <Col xs="auto">
              <Form.Label>Job Title:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter your Job Title"/>
            </Col>
          </Row>

            <Row>
          <Col xs="auto">
            <Form.Label>Overall rating of employer:</Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Excellent" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Good" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Fair" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Poor" />
            </Form.Group>
          </Col>
        </Row>

          <Row>
          <Col xs="auto">
            <Form.Label>Overall rating of work experience:</Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Excellent" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Good" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Fair" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Poor" />
            </Form.Group>
          </Col>
        </Row>

          <Row>
          <Col xs="auto">
            <Form.Label>How much of your work experience was related to your studies in Computer Science?:</Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Excellent" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Good" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Fair" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Label></Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Poor" />
            </Form.Group>
          </Col>
        </Row>


          <Row>
            <Col xs="auto">
              <Form.Label>Rating of learning as a result of your internship experience:</Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Label></Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Excellent" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Label></Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Good" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Label></Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Fair" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Label></Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Poor" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
              <Col xs="auto">
                <Form.Label>Would you repeat your work experience with the same employer?:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Yes" />
                </Form.Group>
              </Col>

              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="No" />
                </Form.Group>
              </Col>
            </Row>

          <Row>
            <Col xs="auto">
              <Form.Label>If not, explain why:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="" />
            </Col>
          </Row>

          <Form.Label></Form.Label>
            <Row>
              <Col xs="auto">
                <Form.Label>Would you recommend your employer to other internship students?:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Yes" />
                </Form.Group>
              </Col>

              <Col xs="auto">
                <Form.Label></Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="No" />
                </Form.Group>
              </Col>
            </Row>

          <Row>
            <Col xs="auto">
              <Form.Label>If not, explain why:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="" />
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formReasons">
            <Form.Label>Based upon your work experience, what additional instructional content or revisions should be included
              within the Curriculum?</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>
          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>Any additional comments?</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Put additional comments here" />
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <div class="wrapper">
            <div class="divider div-transparent"></div>
          </div>

          <Form.Label><b>CS Form 405</b></Form.Label>

          <Row className="mb-3">
            <Form.Group as={Col} xs={7}>
              <Form.Label>Student's Digital Signature</Form.Label>
              <Form.Check type="checkbox"/>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form>COMPUTER SCIENCE INTERNSHIP WEEKLY ACTIVITY LOG</Form>
          </Form.Group>


          <Row>
            <Col xs="auto">
              <Form.Label>Student’s name:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter Student's name"/>
            </Col>
          </Row>

          <Form.Label></Form.Label>

          <table id="breakfree">
            <tr>
              <th id="VSmoll">Week</th>
              <th>DESCRIPTION OF ACTIVITIES</th>
              <th id="Smoll"></th>
              <th id="VSmoll">Hours</th>
              
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  {/* <Form.Control/> */}
                  <textarea name="message" rows="2" cols="145"></textarea>
                </Form.Group>
              </td>
              <td></td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  {/* <Form.Control/> */}
                  <textarea name="message" rows="2" cols="145"></textarea>
                </Form.Group>
              </td>
              <td></td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  {/* <Form.Control/> */}
                  <textarea name="message" rows="2" cols="145"></textarea>
                </Form.Group>
              </td>
              <td></td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  {/* <Form.Control/> */}
                  <textarea name="message" rows="2" cols="145"></textarea>
                </Form.Group>
              </td>
              <td></td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  {/* <Form.Control/> */}
                  <textarea name="message" rows="2" cols="145"></textarea>
                </Form.Group>
              </td>
              <td></td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  {/* <Form.Control/> */}
                  <textarea name="message" rows="2" cols="145"></textarea>
                </Form.Group>
              </td>
              <td></td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  {/* <Form.Control/> */}
                  <textarea name="message" rows="2" cols="145"></textarea>
                </Form.Group>
              </td>
              <td></td>
              <td>
              <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
              {/* <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group> */}
              </td>
              <td>
              {/* <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group> */}
              </td>
              <td id="Smoll">Total Hours:</td>
              <td>
                <Form.Group as={Col} controlId="formBox1">
                  <Form.Control/>
                </Form.Group>
              </td>
            </tr>
          </table>

          <Form.Group className="mb-3">
            <Form align='left'>Note: Specify your weekly activities as accurately as possible in one succinct paragraph. The cells will expand accordingly.</Form>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          
        </Form>
      {/* </header> */}
      </div>
      </div>
      </Container>
    </div>
  );
}

export default App;
