// import logo from '../../Photo/secCMPSLogoEdit.png';
// import { Formik } from 'formik';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
// import { createInternForm } from '../../graphql/mutations'
import { getInternForm } from '../../graphql/queries'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navy from "../../Comp/Navbar/Navbar"
import './Employer.css';
import logo from '../../Photo/SLU-shield.png';
function App() {
  // const [ven, setvenue] =useState("");
  // const [vencap, getvenuecap] = useState(0)
  // const [cap, setcap] = useState(0);
  // const [room, setroom] = useState("");
  // const [approval, setapproval] = useState(false);
  const [typedID, getTypedID] = useState("")
  const [redirect, setRedirect] = useState(false);
  // const [formState, setFormState] = useState({
  //   Student_Name: "",
  //   Company_Name: "",
  //   Semester_And_Year: "",
  //   Hours_Per_Week: "",
  //   Proposed_Start: "",
  //   Proposed_End: "",
  //   Company_Address: "",
  //   Employer_City: "",
  //   Employer_State: "",
  //   Employer_Zip: "",
  //   Form_401: "",
  //   Form_402: "",
  //   Form_403: "",
  //   Form_404: "",
  //   Form_405: "",
  //   Form_410: "",
  //   Form_420: "",
  //   Student_Will_Accomplish_1: "",
  //   Student_Will_Accomplish_2: "",
  //   Student_Will_Accomplish_3: "",
  //   Supervisor_Rating_1: "",
  //   Supervisor_Rating_2: "",
  //   Supervisor_Rating_3: "",
  //   id: "",
  // });

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

  async function getdata(){
    try {
      console.log(typedID);
      const result = await API.graphql(graphqlOperation(getInternForm, {id: typedID} //,{
        // Student_Name,
        // Company_Name,
        // Semester_And_Year,
        // Hours_Per_Week,
        // Proposed_Start,
        // Proposed_End,
        // Company_Address,
        // Employer_City,
        // Employer_State,
        // Employer_Zip,
        // Form_401,
        // Form_402,
        // Form_403,
        // Form_404,
        // Form_405,
        // Form_410,
        // Form_420,
        // Student_Will_Accomplish_1,
        // Student_Will_Accomplish_2,
        // Student_Will_Accomplish_3,
        // Supervisor_Rating_1,
        // Supervisor_Rating_2,
        // Supervisor_Rating_3,
        // id,
      // }
      )
      )
      
      
     console.log("gotten")
     console.log(result);
    //  getid(result.data.createInternForm.id);
    setRedirect(true);
    <Redirect to={`/employer/${typedID}`}/>
   } catch (err) {
     console.log('error getting data, or id given does not exist:', err)
   }
 }

 const handleSubmit = (event) => {
   // eslint-disable-next-line
  const form = event.currentTarget;
  event.preventDefault();
  event.stopPropagation();
  getdata();
};

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
  
  
  return !redirect ?(
    
    <div className="App">
      
      <Container align-items="center">
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
      <Container align-items="center">
      <div className="AppForm">
      <div className="App-FormF">
        <p><b>Welcome to the Online CMPS 400 Internship Form Employer Portal</b></p>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
            <Col xs="auto">
              <Form.Label>Form ID:</Form.Label>
            </Col>
            <Col>
              <Form.Control type="string" placeholder="Enter The Form ID Sent by Email" onChange={(e)=> getTypedID(e.target.value)}/>
            </Col>
            </Row>
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
  ) : (<Redirect to = {`/employer/${typedID}`}/>);
}

export default App;
