import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navy from "../../Comp/Navbar/Navbar"
import './Facilty.css';
import { API, graphqlOperation } from 'aws-amplify';
import logo from '../../Photo/SLU-shield.png';
import { getInternForm } from '../../graphql/queries'

function App() {

  const [typedID, getTypedID] = useState("")
  const [redirect, setRedirect] = useState(false);

  async function getdata(){
    try {
      const result = await API.graphql(graphqlOperation(getInternForm, {id: typedID}))
      console.log(result.data.getInternForm);
      if(result.data.getInternForm != null){
        // console.log("HELLOO")
        setRedirect(true);
        <Redirect to={`/faculty/${typedID}`}/>
      } else{
        console.log("error getting data, or id given does not exist.")
      }
    //  getid(result.data.createInternForm.id);
   } catch (err) {
      setRedirect(false);
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
        {/* <Card> */}
        <p><b>Welcome to the Online CMPS 400 Internship Form Facilty Portal</b></p>
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
        {/* </Card> */}
        
      {/* </header> */}
      </div>
      </div>
      </Container>
    </div>
  ) : (<Redirect to = {`/faculty/${typedID}`}/>);
}

export default App;
