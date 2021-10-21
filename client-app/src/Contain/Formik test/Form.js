// import logo from '../../Photo/secCMPSLogoEdit.png';
import * as yup from 'yup';
import { Formik } from 'formik';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navy from "../../Comp/Navbar/Navbar"
import './Form.css';
import logo from '../../Photo/SLU-shield.png';
function App() {
  

  useEffect(()=>{
    denyos();
  });

  function denyos(){
    if(getMobileOperatingSystem() === "Windows Phone"|| getMobileOperatingSystem() === "Android"|| getMobileOperatingSystem() === "iOS"){
      document.getElementById("overlay").style.display = "block";
      document.getElementById("AppForm").style.display = "none";
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

  // const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),
    wnum: yup.string().required(),
    email: yup.string().required(),
    cellnum: yup.string().required(),
    homenum: yup.string().required(),
    worknum: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

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
              <p>We are sorry but the viewport must be widder to complete this form</p>
              <p>We appologize for this inconvenience.</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Container>
      <div id="AppForm">
      <div className="App-Form">
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        wnum: '',
        email: '',
        cellnum: '',
        homenum: '',
        worknum: '',
        zip: '',
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            {/* <Form.Group as={Col} md="4" controlId="validationFormik01"> */}
            <Col xs="auto">
              <Form.Label>Name:</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                  {errors.name}
              </Form.Control.Feedback>
            </Col>
            
            <Col xs="auto">
              <Form.Label>W#:</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter your w#"
                name="wnum"
                value={values.wnum}
                onChange={handleChange}
                isValid={!!errors.wnum}
              />

                <Form.Control.Feedback type="invalid">
                  {errors.wnum}
                </Form.Control.Feedback>
            </Col>
            <Col xs="auto">
              <Form.Label>Email:</Form.Label>
            </Col>
            <Col>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Row>
          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>Cell Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="tel"
                placeholder="enter your cell phone number"
                name="cellnum"
                value={values.cellnum}
                onChange={handleChange}
                isInvalid={!!errors.cellnum}
              />

              <Form.Control.Feedback type="invalid">
                {errors.cellnum}
              </Form.Control.Feedback>
            </Col>  
            <Col xs="auto">
              <Form.Label>Home Phone #:</Form.Label>
            </Col> 
            <Col> 
              <Form.Control
                type="text"
                placeholder="Enter your home phone #"
                name="homenum"
                value={values.homenum}
                onChange={handleChange}
                isInvalid={!!errors.homenum}
              />
              <Form.Control.Feedback type="invalid">
                {errors.homenum}
              </Form.Control.Feedback>
            </Col> 
            {/* <Form.Group as={Col} md="3" controlId="validationFormik05"> */}
            <Col xs="auto">
              <Form.Label>Work Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter your work phone #"
                name="worknum"
                value={values.worknum}
                onChange={handleChange}
                isInvalid={!!errors.worknum}
              />

              <Form.Control.Feedback type="invalid">
                {errors.worknum}
              </Form.Control.Feedback>
            {/* </Form.Group> */}
            </Col>
          </Row>
          <Form.Label></Form.Label>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
    </div>
      </div>
    </div>
  );

}
export default App;
