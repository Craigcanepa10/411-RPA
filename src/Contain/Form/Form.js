import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navy from "../../Comp/Navbar/Navbar"
import './Form.css';
import logo from '../../Photo/SLU-shield.png';
import * as emailjs from 'emailjs-com'
import { Auth, API, graphqlOperation } from 'aws-amplify';
// import { InternForm } from '../../models';
import { createInternForm } from '../../graphql/mutations'
// import { listInternForms } from '../../graphql/queries'



function App() {
  
  const [validated, setValidated] = useState(false); //the validation stuff
  const [validated2, setValidated2] = useState(false); //the validation stuff
  const [validated3, setValidated3] = useState(false); //the validation stuff
  const [name, getname] = useState("");
  const [wnum, getwnum] = useState("");
  const [email, getemail] = useState("");
  const [cellnum, getcellnum] = useState("");
  const [homenum, gethomenum] = useState("");
  const [worknum, getworknum] = useState("");
  const [presAdd, getpresAdd] = useState("");
  const [permAdd, getpermAdd] = useState("");
  const [degree, getdegree] = useState("");
  const [semHours, getsemHours] = useState("");
  const [majorGPA, getmajorGPA] = useState("");
  const [expGradDate, getexpGradDate] = useState("");
  const [comName, getcomName] = useState("");
  const [comAdd, getcomAdd] = useState("");
  const [supName, getsupName] = useState("");
  const [empStartDate, getempStartDate] = useState("");
  const [empEndDate, getempEndDate] = useState("");
  const [empStatus, getempStatus] = useState("");
  const [jobTitle, getjobTitle] = useState("");
  const [jobRes, getjobRes] = useState("");
  // const [stuDigSig401, getstuDigSig401] = useState("");
  const [stuDigSigDate401, getstuDigSigDate401] = useState("");
  const [supemail, getsupemail] = useState("");
  const [supNum, getsupNum] = useState("");
  const [semnyear, getsemnyear] = useState("");
  const [hourswork, gethourswork] = useState("");
  // const [stuDigSig402, getstuDigSig402] = useState("");
  const [stuDigSigDate402, getstuDigSigDate402] = useState("");
  const [goal1, getgoal1] = useState("");
  // const [suprate1, getsuprate1] = useState("");
  const [goal2, getgoal2] = useState("");
  // const [suprate2, getsuprate2] = useState("");
  const [goal3, getgoal3] = useState("");
  // const [suprate3, getsuprate3] = useState("");
  const [stuDigSigDate403, getstuDigSigDate403] = useState("");
  const [id, getid] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [forms, setForms] = useState([]);
  // eslint-disable-next-line
  const [formState, setFormState] = useState({Student_Name: '', W_Num: '', Student_Cell_Num: '', Student_Home_Phone: '', Student_Email: '', Student_Work_Number: '', Student_Present_Address: '', Student_Permanent_Address: "", Degree: "", Semester_Hours_Earned: "", Major_GPA: "", Expected_Grad_Date: "", Company_Name: "", Company_Address: "", Name_and_Title_Immediate_Supervisor: "", Supervisor_Email: "", Supervisor_Phone: "", Proposed_Start: "", Proposed_End: "", Employed_Full: "", Job_Title: "", Job_Responsibilities: "", Student_Signature_Form_401: false, Student_Signature_Date_Form_401: "", Date_Rec_Dep: "", Action_Taken: "", Reason: "", Faculty_Signature_Form_401: false, Faculty_Signature_Date_Form_401: "", Dep_Head_Signature_Form_401: false, Dep_Head_Signature_Date_Form_401: "", Dean_Signature_Form_401: false, Dean_Signature_Date_Form_401: "", Semester_And_Year: "", Hours_Per_Week: "", Employer_Signature_Form_402: false, Employer_City: "", Employer_State: "", Employer_Zip: 0, Student_Signature_Form_402: false, Student_Signature_Date_Form_402: "", Student_Will_Accomplish_1: "", Supervisor_Rating_1: "", Student_Will_Accomplish_2: "", Supervisor_Rating_2: "", Student_Will_Accomplish_3: "", Supervisor_Rating_3: "", Student_Signature_Form_403: false, Student_Signature_Date_Form_403: "", Employer_Signature_Form_403: false, Employer_Signature_Date_Form_403: "", Intern_Cord_Signature_Form_403: false, Intern_Cord_Signature_Date_Form_403: "", Total_Hours_For_Semester: "", Total_Wages_For_Deduction: "placeholder", Month_1: "", Month_1_Week_1: "", Month_1_Week_1_Sun: "placeholder", Month_1_Week_1_Mon: "placeholder", Month_1_Week_1_Tue: "placeholder", Month_1_Week_1_Wed: "placeholder", Month_1_Week_1_Thu: "placeholder", Month_1_Week_1_Fri: "placeholder", Month_1_Week_1_Sat: "placeholder", Month_1_Week_1_Total_Hours: "placeholder", Month_1_Week_1_Weekly_Wages: "placeholder", Month_1_Week_2: "", Month_1_Week_2_Sun: "placeholder", Month_1_Week_2_Mon: "placeholder", Month_1_Week_2_Tue: "placeholder", Month_1_Week_2_Wed: "placeholder", Month_1_Week_2_Thu: "placeholder", Month_1_Week_2_Fri: "placeholder", Month_1_Week_2_Sat: "placeholder", Month_1_Week_2_Total_Hours: "placeholder", Month_1_Week_2_Weekly_Wages: "placeholder", Month_1_Week_3: "", Month_1_Week_3_Sun: "placeholder", Month_1_Week_3_Mon: "placeholder", Month_1_Week_3_Tue: "placeholder", Month_1_Week_3_Wed: "placeholder", Month_1_Week_3_Thu: "placeholder", Month_1_Week_3_Fri: "placeholder", Month_1_Week_3_Sat: "placeholder", Month_1_Week_3_Total_Hours: "placeholder", Month_1_Week_3_Weekly_Wages: "placeholder", Month_1_Week_4: "", Month_1_Week_4_Sun: "placeholder", Month_1_Week_4_Mon: "placeholder", Month_1_Week_4_Tue: "placeholder", Month_1_Week_4_Wed: "placeholder", Month_1_Week_4_Thu: "placeholder", Month_1_Week_4_Fri: "placeholder", Month_1_Week_4_Sat: "placeholder", Month_1_Week_4_Total_Hours: "placeholder", Month_1_Week_4_Weekly_Wages: "placeholder", Month_1_Total_Sun: "placeholder", Month_1_Total_Mon: "placeholder", Month_1_Total_Tue: "placeholder", Month_1_Total_Wed: "placeholder", Month_1_Total_Thu: "placeholder", Month_1_Total_Fri: "placeholder", Month_1_Total_Sat: "placeholder", Month_1_Total_Hours: "placeholder", Month_1_Total_Weekly_Wages: "placeholder", Month_2: "", Month_2_Week_1: "", Month_2_Week_1_Sun: "placeholder", Month_2_Week_1_Mon: "placeholder", Month_2_Week_1_Tue: "placeholder", Month_2_Week_1_Wed: "placeholder", Month_2_Week_1_Thu: "placeholder", Month_2_Week_1_Fri: "placeholder", Month_2_Week_1_Sat: "placeholder", Month_2_Week_1_Total_Hours: "placeholder", Month_2_Week_1_Weekly_Wages: "placeholder", Month_2_Week_2: "", Month_2_Week_2_Sun: "placeholder", Month_2_Week_2_Mon: "placeholder", Month_2_Week_2_Tue: "placeholder", Month_2_Week_2_Wed: "placeholder", Month_2_Week_2_Thu: "placeholder", Month_2_Week_2_Fri: "placeholder", Month_2_Week_2_Sat: "placeholder", Month_2_Week_2_Total_Hours: "placeholder", Month_2_Week_2_Weekly_Wages: "placeholder", Month_2_Week_3: "", Month_2_Week_3_Sun: "placeholder", Month_2_Week_3_Mon: "placeholder", Month_2_Week_3_Tue: "placeholder", Month_2_Week_3_Wed: "placeholder", Month_2_Week_3_Thu: "placeholder", Month_2_Week_3_Fri: "placeholder", Month_2_Week_3_Sat: "placeholder", Month_2_Week_3_Total_Hours: "placeholder", Month_2_Week_3_Weekly_Wages: "placeholder", Month_2_Week_4: "", Month_2_Week_4_Sun: "placeholder", Month_2_Week_4_Mon: "placeholder", Month_2_Week_4_Tue: "placeholder", Month_2_Week_4_Wed: "placeholder", Month_2_Week_4_Thu: "placeholder", Month_2_Week_4_Fri: "placeholder", Month_2_Week_4_Sat: "placeholder", Month_2_Week_4_Total_Hours: "placeholder", Month_2_Week_4_Weekly_Wages: "placeholder", Month_2_Total_Sun: "placeholder", Month_2_Total_Mon: "placeholder", Month_2_Total_Tue: "placeholder", Month_2_Total_Wed: "placeholder", Month_2_Total_Thu: "placeholder", Month_2_Total_Fri: "placeholder", Month_2_Total_Sat: "placeholder", Month_2_Total_Hours: "placeholder", Month_2_Total_Weekly_Wages: "placeholder", Month_3: "", Month_3_Week_1: "", Month_3_Week_1_Sun: "placeholder", Month_3_Week_1_Mon: "placeholder", Month_3_Week_1_Tue: "placeholder", Month_3_Week_1_Wed: "placeholder", Month_3_Week_1_Thu: "placeholder", Month_3_Week_1_Fri: "placeholder", Month_3_Week_1_Sat: "placeholder", Month_3_Week_1_Total_Hours: "placeholder", Month_3_Week_1_Weekly_Wages: "placeholder", Month_3_Week_2: "", Month_3_Week_2_Sun: "placeholder", Month_3_Week_2_Mon: "placeholder", Month_3_Week_2_Tue: "placeholder", Month_3_Week_2_Wed: "placeholder", Month_3_Week_2_Thu: "placeholder", Month_3_Week_2_Fri: "placeholder", Month_3_Week_2_Sat: "placeholder", Month_3_Week_2_Total_Hours: "placeholder", Month_3_Week_2_Weekly_Wages: "placeholder", Month_3_Week_3: "", Month_3_Week_3_Sun: "placeholder", Month_3_Week_3_Mon: "placeholder", Month_3_Week_3_Tue: "placeholder", Month_3_Week_3_Wed: "placeholder", Month_3_Week_3_Thu: "placeholder", Month_3_Week_3_Fri: "placeholder", Month_3_Week_3_Sat: "placeholder", Month_3_Week_3_Total_Hours: "placeholder", Month_3_Week_3_Weekly_Wages: "placeholder", Month_3_Week_4: "", Month_3_Week_4_Sun: "placeholder", Month_3_Week_4_Mon: "placeholder", Month_3_Week_4_Tue: "placeholder", Month_3_Week_4_Wed: "placeholder", Month_3_Week_4_Thu: "placeholder", Month_3_Week_4_Fri: "placeholder", Month_3_Week_4_Sat: "placeholder", Month_3_Week_4_Total_Hours: "placeholder", Month_3_Week_4_Weekly_Wages: "placeholder", Month_3_Total_Sun: "placeholder", Month_3_Total_Mon: "placeholder", Month_3_Total_Tue: "placeholder", Month_3_Total_Wed: "placeholder", Month_3_Total_Thu: "placeholder", Month_3_Total_Fri: "placeholder", Month_3_Total_Sat: "placeholder", Month_3_Total_Hours: "placeholder", Month_3_Total_Weekly_Wages: "placeholder", Month_4: "", Month_4_Week_1: "", Month_4_Week_1_Sun: "placeholder", Month_4_Week_1_Mon: "placeholder", Month_4_Week_1_Tue: "placeholder", Month_4_Week_1_Wed: "placeholder", Month_4_Week_1_Thu: "placeholder", Month_4_Week_1_Fri: "placeholder", Month_4_Week_1_Sat: "placeholder", Month_4_Week_1_Total_Hours: "placeholder", Month_4_Week_1_Weekly_Wages: "placeholder", Month_4_Week_2: "", Month_4_Week_2_Sun: "placeholder", Month_4_Week_2_Mon: "placeholder", Month_4_Week_2_Tue: "placeholder", Month_4_Week_2_Wed: "placeholder", Month_4_Week_2_Thu: "placeholder", Month_4_Week_2_Fri: "placeholder", Month_4_Week_2_Sat: "placeholder", Month_4_Week_2_Total_Hours: "placeholder", Month_4_Week_2_Weekly_Wages: "placeholder", Month_4_Week_3: "", Month_4_Week_3_Sun: "placeholder", Month_4_Week_3_Mon: "placeholder", Month_4_Week_3_Tue: "placeholder", Month_4_Week_3_Wed: "placeholder", Month_4_Week_3_Thu: "placeholder", Month_4_Week_3_Fri: "placeholder", Month_4_Week_3_Sat: "placeholder", Month_4_Week_3_Total_Hours: "placeholder", Month_4_Week_3_Weekly_Wages: "placeholder", Month_4_Week_4: "", Month_4_Week_4_Sun: "placeholder", Month_4_Week_4_Mon: "placeholder", Month_4_Week_4_Tue: "placeholder", Month_4_Week_4_Wed: "placeholder", Month_4_Week_4_Thu: "placeholder", Month_4_Week_4_Fri: "placeholder", Month_4_Week_4_Sat: "placeholder", Month_4_Week_4_Total_Hours: "placeholder", Month_4_Week_4_Weekly_Wages: "placeholder", Month_4_Total_Sun: "placeholder", Month_4_Total_Mon: "placeholder", Month_4_Total_Tue: "placeholder", Month_4_Total_Wed: "placeholder", Month_4_Total_Thu: "placeholder", Month_4_Total_Fri: "placeholder", Month_4_Total_Sat: "placeholder", Month_4_Total_Hours: "placeholder", Month_4_Total_Weekly_Wages: "placeholder", Student_Signature_Form_404: false, Student_Signature_Date_Form_404: "", Supervisor_Signature_Form_404: false, Supervisor_Signature_Date_Form_404: "", Date_Form_420: "", Relations_With_Others: "", Attitude_Application_To_Work: "", Judgement: "", Dependability: "", Ability_To_Learn: "", Quality_Of_Work: "", Overall_Performance: "", Attendance: "", Punctuality: "", Remarks: "", Report_Discussed_With_Student: "", Student_Signature_Form_420: false, Student_Signature_Date_Form_420: "", Supervisor_Signature_Form_420: false, Supervisor_Signature_Date_Form_420: "", Supervisor_Name: "", Rating_Of_Employer: "", Rating_Of_Work_Exp: "", Relation_To_CMPS_Studies: "", Rating_Of_Learning_Of_Internship: "", Would_You_Repeat: "", Would_You_Repeat_Explain: "", Would_You_Recommend: "", Would_You_Recommend_Explain: "", Additional_Content_For_Curriculum: "", Any_Additional_Comments: "", Student_Signature_Form_405: false, Student_Signature_Date_Form_405: "", Week_1: "", Week_1_Activities: "", Week_1_Hours: "placeholder", Week_2: "", Week_2_Activities: "", Week_2_Hours: "placeholder", Week_3: "", Week_3_Activities: "", Week_3_Hours: "placeholder", Week_4: "", Week_4_Activities: "", Week_4_Hours: "placeholder", Week_5: "", Week_5_Activities: "", Week_5_Hours: "placeholder", Week_6: "", Week_6_Activities: "", Week_6_Hours: "placeholder", Week_7: "", Week_7_Activities: "", Week_7_Hours: "placeholder", Total_Hours: "placeholder", Form_401: "", Form_402: "", Form_403: "", Form_404: "", Form_405: "", Form_420: "", Form_410: "", sup_sig_date_form_402: "", compl_sup_sig_form_403: false, compl_sup_sig_date_form_403: ""});
  

  // const fetchActors = async () => {
  //   try {
  //       const actorData = await API.graphql(graphqlOperation(listInternForms))
  //       const actors = actorData.data.listActors.items
  //       console.log(actors)
  //   } catch (err) { console.log('error fetching actors') }
  // }
  // const addForm = async () => {

    async function signOut() {
      try {
          await Auth.signOut();
      } catch (error) {
          console.log('error signing out: ', error);
      }
  }

  async function addForm(){
     try {
      const form = { ...formState }
      setForms([...forms, form])
      console.log("Submited")
      const result = await API.graphql(graphqlOperation(createInternForm, { input: {Student_Name: name, W_Num: wnum, Student_Cell_Num: cellnum, Student_Home_Phone: homenum, Student_Email: email, Student_Work_Number: worknum, Student_Present_Address: presAdd, Student_Permanent_Address: permAdd, Degree: degree, Semester_Hours_Earned: semHours, Major_GPA: majorGPA, Expected_Grad_Date: expGradDate, Company_Name: comName, Company_Address: comAdd, Name_and_Title_Immediate_Supervisor: supName, Supervisor_Email: supemail, Supervisor_Phone: supNum, Proposed_Start: empStartDate, Proposed_End: empEndDate, Employed_Full: empStatus, Job_Title: jobTitle, Job_Responsibilities: jobRes, Student_Signature_Form_401: true, Student_Signature_Date_Form_401: stuDigSigDate401, Date_Rec_Dep: stuDigSigDate401, Action_Taken: "0", Reason: "0", Faculty_Signature_Form_401: false, Faculty_Signature_Date_Form_401: stuDigSigDate401, Dep_Head_Signature_Form_401: false, Dep_Head_Signature_Date_Form_401: stuDigSigDate401, Dean_Signature_Form_401: false, Dean_Signature_Date_Form_401: stuDigSigDate401, Semester_And_Year: semnyear, Hours_Per_Week: hourswork, Employer_Signature_Form_402: false, Employer_City: "0", Employer_State: "0", Employer_Zip: "0", Student_Signature_Form_402: true, Student_Signature_Date_Form_402: stuDigSigDate402, Student_Will_Accomplish_1: goal1, Supervisor_Rating_1: "0", Student_Will_Accomplish_2: goal2, Supervisor_Rating_2: "0", Student_Will_Accomplish_3: goal3, Supervisor_Rating_3: "0", Student_Signature_Form_403: true, Student_Signature_Date_Form_403: stuDigSigDate403, Employer_Signature_Form_403: false, Employer_Signature_Date_Form_403: stuDigSigDate401, Intern_Cord_Signature_Form_403: false, Intern_Cord_Signature_Date_Form_403: stuDigSigDate401, Total_Hours_For_Semester: "0", Total_Wages_For_Deduction: "0", Month_1: "0", Month_1_Week_1: "0", Month_1_Week_1_Sun: "0", Month_1_Week_1_Mon: "0", Month_1_Week_1_Tue: "0", Month_1_Week_1_Wed: "0", Month_1_Week_1_Thu: "0", Month_1_Week_1_Fri: "0", Month_1_Week_1_Sat: "0", Month_1_Week_1_Total_Hours: "0", Month_1_Week_1_Weekly_Wages: "0", Month_1_Week_2: "0", Month_1_Week_2_Sun: "0", Month_1_Week_2_Mon: "0", Month_1_Week_2_Tue: "0", Month_1_Week_2_Wed: "0", Month_1_Week_2_Thu: "0", Month_1_Week_2_Fri: "0", Month_1_Week_2_Sat: "0", Month_1_Week_2_Total_Hours: "0", Month_1_Week_2_Weekly_Wages: "0", Month_1_Week_3: "0", Month_1_Week_3_Sun: "0", Month_1_Week_3_Mon: "0", Month_1_Week_3_Tue: "0", Month_1_Week_3_Wed: "0", Month_1_Week_3_Thu: "0", Month_1_Week_3_Fri: "0", Month_1_Week_3_Sat: "0", Month_1_Week_3_Total_Hours: "0", Month_1_Week_3_Weekly_Wages: "0", Month_1_Week_4: "0", Month_1_Week_4_Sun: "0", Month_1_Week_4_Mon: "0", Month_1_Week_4_Tue: "0", Month_1_Week_4_Wed: "0", Month_1_Week_4_Thu: "0", Month_1_Week_4_Fri: "0", Month_1_Week_4_Sat: "0", Month_1_Week_4_Total_Hours: "0", Month_1_Week_4_Weekly_Wages: "0", Month_1_Total_Sun: "0", Month_1_Total_Mon: "0", Month_1_Total_Tue: "0", Month_1_Total_Wed: "0", Month_1_Total_Thu: "0", Month_1_Total_Fri: "0", Month_1_Total_Sat: "0", Month_1_Total_Hours: "0", Month_1_Total_Weekly_Wages: "0", Month_2: "0", Month_2_Week_1: "0", Month_2_Week_1_Sun: "0", Month_2_Week_1_Mon: "0", Month_2_Week_1_Tue: "0", Month_2_Week_1_Wed: "0", Month_2_Week_1_Thu: "0", Month_2_Week_1_Fri: "0", Month_2_Week_1_Sat: "0", Month_2_Week_1_Total_Hours: "0", Month_2_Week_1_Weekly_Wages: "0", Month_2_Week_2: "0", Month_2_Week_2_Sun: "0", Month_2_Week_2_Mon: "0", Month_2_Week_2_Tue: "0", Month_2_Week_2_Wed: "0", Month_2_Week_2_Thu: "0", Month_2_Week_2_Fri: "0", Month_2_Week_2_Sat: "0", Month_2_Week_2_Total_Hours: "0", Month_2_Week_2_Weekly_Wages: "0", Month_2_Week_3: "0", Month_2_Week_3_Sun: "0", Month_2_Week_3_Mon: "0", Month_2_Week_3_Tue: "0", Month_2_Week_3_Wed: "0", Month_2_Week_3_Thu: "0", Month_2_Week_3_Fri: "0", Month_2_Week_3_Sat: "0", Month_2_Week_3_Total_Hours: "0", Month_2_Week_3_Weekly_Wages: "0", Month_2_Week_4: "0", Month_2_Week_4_Sun: "0", Month_2_Week_4_Mon: "0", Month_2_Week_4_Tue: "0", Month_2_Week_4_Wed: "0", Month_2_Week_4_Thu: "0", Month_2_Week_4_Fri: "0", Month_2_Week_4_Sat: "0", Month_2_Week_4_Total_Hours: "0", Month_2_Week_4_Weekly_Wages: "0", Month_2_Total_Sun: "0", Month_2_Total_Mon: "0", Month_2_Total_Tue: "0", Month_2_Total_Wed: "0", Month_2_Total_Thu: "0", Month_2_Total_Fri: "0", Month_2_Total_Sat: "0", Month_2_Total_Hours: "0", Month_2_Total_Weekly_Wages: "0", Month_3: "0", Month_3_Week_1: "0", Month_3_Week_1_Sun: "0", Month_3_Week_1_Mon: "0", Month_3_Week_1_Tue: "0", Month_3_Week_1_Wed: "0", Month_3_Week_1_Thu: "0", Month_3_Week_1_Fri: "0", Month_3_Week_1_Sat: "0", Month_3_Week_1_Total_Hours: "0", Month_3_Week_1_Weekly_Wages: "0", Month_3_Week_2: "0", Month_3_Week_2_Sun: "0", Month_3_Week_2_Mon: "0", Month_3_Week_2_Tue: "0", Month_3_Week_2_Wed: "0", Month_3_Week_2_Thu: "0", Month_3_Week_2_Fri: "0", Month_3_Week_2_Sat: "0", Month_3_Week_2_Total_Hours: "0", Month_3_Week_2_Weekly_Wages: "0", Month_3_Week_3: "0", Month_3_Week_3_Sun: "0", Month_3_Week_3_Mon: "0", Month_3_Week_3_Tue: "0", Month_3_Week_3_Wed: "0", Month_3_Week_3_Thu: "0", Month_3_Week_3_Fri: "0", Month_3_Week_3_Sat: "0", Month_3_Week_3_Total_Hours: "0", Month_3_Week_3_Weekly_Wages: "0", Month_3_Week_4: "0", Month_3_Week_4_Sun: "0", Month_3_Week_4_Mon: "0", Month_3_Week_4_Tue: "0", Month_3_Week_4_Wed: "0", Month_3_Week_4_Thu: "0", Month_3_Week_4_Fri: "0", Month_3_Week_4_Sat: "0", Month_3_Week_4_Total_Hours: "0", Month_3_Week_4_Weekly_Wages: "0", Month_3_Total_Sun: "0", Month_3_Total_Mon: "0", Month_3_Total_Tue: "0", Month_3_Total_Wed: "0", Month_3_Total_Thu: "0", Month_3_Total_Fri: "0", Month_3_Total_Sat: "0", Month_3_Total_Hours: "0", Month_3_Total_Weekly_Wages: "0", Month_4: "0", Month_4_Week_1: "0", Month_4_Week_1_Sun: "0", Month_4_Week_1_Mon: "0", Month_4_Week_1_Tue: "0", Month_4_Week_1_Wed: "0", Month_4_Week_1_Thu: "0", Month_4_Week_1_Fri: "0", Month_4_Week_1_Sat: "0", Month_4_Week_1_Total_Hours: "0", Month_4_Week_1_Weekly_Wages: "0", Month_4_Week_2: "0", Month_4_Week_2_Sun: "0", Month_4_Week_2_Mon: "0", Month_4_Week_2_Tue: "0", Month_4_Week_2_Wed: "0", Month_4_Week_2_Thu: "0", Month_4_Week_2_Fri: "0", Month_4_Week_2_Sat: "0", Month_4_Week_2_Total_Hours: "0", Month_4_Week_2_Weekly_Wages: "0", Month_4_Week_3: "0", Month_4_Week_3_Sun: "0", Month_4_Week_3_Mon: "0", Month_4_Week_3_Tue: "0", Month_4_Week_3_Wed: "0", Month_4_Week_3_Thu: "0", Month_4_Week_3_Fri: "0", Month_4_Week_3_Sat: "0", Month_4_Week_3_Total_Hours: "0", Month_4_Week_3_Weekly_Wages: "0", Month_4_Week_4: "0", Month_4_Week_4_Sun: "0", Month_4_Week_4_Mon: "0", Month_4_Week_4_Tue: "0", Month_4_Week_4_Wed: "0", Month_4_Week_4_Thu: "0", Month_4_Week_4_Fri: "0", Month_4_Week_4_Sat: "0", Month_4_Week_4_Total_Hours: "0", Month_4_Week_4_Weekly_Wages: "0", Month_4_Total_Sun: "0", Month_4_Total_Mon: "0", Month_4_Total_Tue: "0", Month_4_Total_Wed: "0", Month_4_Total_Thu: "0", Month_4_Total_Fri: "0", Month_4_Total_Sat: "0", Month_4_Total_Hours: "0", Month_4_Total_Weekly_Wages: "0", Student_Signature_Form_404: false, Student_Signature_Date_Form_404: stuDigSigDate401, Supervisor_Signature_Form_404: false, Supervisor_Signature_Date_Form_404: stuDigSigDate401, Date_Form_420: stuDigSigDate401, Relations_With_Others: "", Attitude_Application_To_Work: "0", Judgement: "0", Dependability: "0", Ability_To_Learn: "0", Quality_Of_Work: "0", Overall_Performance: "0", Attendance: "0", Punctuality: "0", Remarks: "0", Report_Discussed_With_Student: "0", Student_Signature_Form_420: false, Student_Signature_Date_Form_420: stuDigSigDate401, Supervisor_Signature_Form_420: false, Supervisor_Signature_Date_Form_420: stuDigSigDate401, Supervisor_Name: "0", Rating_Of_Employer: "0", Rating_Of_Work_Exp: "0", Relation_To_CMPS_Studies: "0", Rating_Of_Learning_Of_Internship: "0", Would_You_Repeat: "0", Would_You_Repeat_Explain: "0", Would_You_Recommend: "0", Would_You_Recommend_Explain: "0", Additional_Content_For_Curriculum: "0", Any_Additional_Comments: "0", Student_Signature_Form_405: false, Student_Signature_Date_Form_405: stuDigSigDate401, Week_1: "0", Week_1_Activities: "0", Week_1_Hours: "0", Week_2: "0", Week_2_Activities: "0", Week_2_Hours: "0", Week_3: "0", Week_3_Activities: "0", Week_3_Hours: "0", Week_4: "0", Week_4_Activities: "0", Week_4_Hours: "0", Week_5: "0", Week_5_Activities: "0", Week_5_Hours: "0", Week_6: "0", Week_6_Activities: "0", Week_6_Hours: "0", Week_7: "0", Week_7_Activities: "0", Week_7_Hours: "0", Total_Hours: "0", Form_401: "SLUDH", Form_402: "EMP", Form_403: "EMP", Form_404: "NA", Form_405: "NA", Form_420: "NA", Form_410: "NA", sup_sig_date_form_402: stuDigSigDate401, compl_sup_sig_form_403: false, compl_sup_sig_date_form_403: stuDigSigDate401 }}))
      console.log(result.data.createInternForm.id);
      getid(result.data.createInternForm.id);
      emailjs.send('service_q3da0db','template_argwril',{
        to_name: comName,
        from_name: name,
        ID: result.data.createInternForm.id,
        emp_email: supemail,
        },'user_u6qr1k5zmEmoeXO2E4DxC')
      .then(() => {
      console.log("Message Sent, We will get back to you shortly");
      },
      (error) => {
      console.log("An error occurred, Please try again", error);
      });
    } catch (err) {
      console.log('error creating form:', err)
    }
  }

  // async function ionViewCanEnter() {
  //   try {
  //       await Auth.currentAuthenticatedUser();
  //       return true;
  //   } catch {
  //       return false;
  //   }
  // }

  async function checkuser(){
    try{
      const user = await Auth.currentAuthenticatedUser();
      console.log('user: ' , user)
      console.log(user.attributes.email);
      getemail(user.attributes.email)
    }
    catch (err) {
      console.log(err);
      setRedirect(true);
      <Redirect to='/' />
    }
  }


  useEffect(()=>{
    denyos();
    checkuser();
  });

  function denyos(){
    if(getMobileOperatingSystem() === "Windows Phone"|| getMobileOperatingSystem() === "Android"|| getMobileOperatingSystem() === "iOS"){
      document.getElementById("overlay").style.display = "block";
      document.getElementById("AppForm").style.display = "none";
    }
  }
// eslint-disable-next-line
  const emailsender = (e) => {
    emailjs.send('service_q3da0db','template_argwril',{
      to_name: comName,
      from_name: name,
      ID: id,
      emp_email: supemail,
      },'user_u6qr1k5zmEmoeXO2E4DxC')
    .then(() => {
    console.log("Message Sent, We will get back to you shortly");
    },
    (error) => {
    console.log("An error occurred, Please try again", error);
    });
    };

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const handleSubmit = (event) => {
    document.getElementById("stu401").style.display = "block";
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else if (form.checkValidity() === true){
      if (document.getElementById("stu401").style.display === "block"){
        document.getElementById("stu402").style.display = "block";
        document.getElementById("stu401").style.display = "none";
        event.preventDefault();
        event.stopPropagation();
        topFunction();
      } else if (document.getElementById("stu402").style.display === "block"){
        document.getElementById("stu403").style.display = "block";
        document.getElementById("stu402").style.display = "none";
        event.preventDefault();
        event.stopPropagation();
      } else if (document.getElementById("stu403").style.display === "block"){
        document.getElementById("stu403").style.display = "none";
        event.preventDefault();
        event.stopPropagation();
      }
    } else{
      console.log("IT HIT THE ELSE IN HANDLE SUBMIT");
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };

  const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else if (form.checkValidity() === true){
      if (document.getElementById("stu402").style.display === "block"){
        document.getElementById("stu403").style.display = "block";
        document.getElementById("stu402").style.display = "none";
        event.preventDefault();
        event.stopPropagation();
        topFunction();
      } else if (document.getElementById("stu403").style.display === "block"){
        document.getElementById("stu403").style.display = "none";
        event.preventDefault();
        event.stopPropagation();
      }
    } else{
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated2(true);
  };

  const handleSubmit3 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else if (form.checkValidity() === true){
      if (document.getElementById("stu403").style.display === "block"){
        document.getElementById("stu403").style.display = "none";
        document.getElementById("formdone").style.display = "block";
        event.preventDefault();
        event.stopPropagation();
        topFunction();
        addForm();
        // emailsender();
      }
    } else{
      console.log("IT HIT THE ELSE IN HANDLE SUBMIT");
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    event.stopPropagation();
    setValidated3(true);
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
  
  // console.log(name, wnum, email, cellnum, homenum, worknum, presAdd, permAdd, degree, semHours, majorGPA, expGradDate, comName, comAdd, supName, empStartDate, empEndDate, empStatus, jobTitle, jobRes, stuDigSig401, stuDigSigDate401, supemail, supNum)
  
  return !redirect ?(
    
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
      
      <div id="stu401">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label><b>CS Form 401: Application for Internship</b></Form.Label>
          </Form.Group>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Name:</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="text" placeholder="Enter your Name" onChange={(e)=> getname(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your name.
            </Form.Control.Feedback>
            </Col>

            <Col xs="auto">
              <Form.Label>W#:</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="text" placeholder="Enter W#" onChange={(e)=> getwnum(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your W#.
            </Form.Control.Feedback>
            </Col>

            <Col xs="auto">
              <Form.Label>Email:</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="email" value={email} placeholder="Enter Email" onChange={(e)=> getemail(e.target.value)} disabled/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your email.
            </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Cell Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="tel" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" maxlength="10" id="phoneNumber" placeholder="Enter Your Phone Number" onChange={(e)=> getcellnum(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your phone number.
            </Form.Control.Feedback>
            </Col>
            <Col xs="auto">
              <Form.Label>Home Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="tel" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" maxlength="10" placeholder="Enter Your Home Phone Number" onChange={(e)=> gethomenum(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your home number.
            </Form.Control.Feedback>
            </Col>
            <Col xs="auto">
              <Form.Label>Work Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="tel" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" maxlength="10" placeholder="Enter Your Work Phone Number" onChange={(e)=> getworknum(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your work number.
            </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Present Address:</Form.Label>
            </Col>
            <Col>
              <Form.Control required maxlength="30" placeholder="1234 Main St" onChange={(e)=> getpresAdd(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your present address.
            </Form.Control.Feedback>
            </Col>

            <Col xs="auto">
              <Form.Label>Permanent Address:</Form.Label>
            </Col>
            <Col>
              <Form.Control required maxlength="30" placeholder="1234 Main St" onChange={(e)=> getpermAdd(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your permanant address.
            </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Degree:</Form.Label>
            </Col>
            <Col>
              <Form.Control required maxlength="30" placeholder="Your Degree" onChange={(e)=> getdegree(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your degree.
            </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Label></Form.Label>
          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Semester Hours Earned:</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="text" pattern="[0-9]*" maxlength="3" placeholder="Total Hours Earned" onChange={(e)=> getsemHours(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your total hours earned.
            </Form.Control.Feedback>
            </Col>
            <Col xs="auto">
              <Form.Label>Major GPA:</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="text" maxlength="3" placeholder="GPA of your major classes" onChange={(e)=> getmajorGPA(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your major classes GPA.
            </Form.Control.Feedback>
            </Col>
            <Col xs="auto">
              <Form.Label>Expected Graduation Date:</Form.Label>
            </Col>
            <Col>
              <Form.Control required placeholder="Spring 20XX" onChange={(e)=> getexpGradDate(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your epected graduation date.
            </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Companies’s Name:</Form.Label>
            </Col>
            <Col>
              <Form.Control required placeholder="Enter Employer's Name" onChange={(e)=> getcomName(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter the companies name.
            </Form.Control.Feedback>
            </Col>
            <Col xs="auto">
              <Form.Label>Companies's Address:</Form.Label>
            </Col>
            <Col>
              <Form.Control required placeholder="1234 Main St" onChange={(e)=> getcomAdd(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter the company address.
            </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Name and Title of Immediate Supervisor:</Form.Label>
            </Col>
            <Col>
              <Form.Control required maxlength="38" placeholder="Johnny Appleseed Apple placehoder guy" onChange={(e)=> getsupName(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter yours supervisors name and title.
            </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row  id="FIX">
            <Col xs="auto">
              <Form.Label>Supervisor’s E-Mail:</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter Your Supervisors Email here" onChange={(e)=> getsupemail(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your supervisors email.
            </Form.Control.Feedback>
            </Col>
            <Col xs="auto">
              <Form.Label>Supervisor’s Phone #:</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="tel" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" maxlength="10" placeholder="Enter Your Supervisors Phone # here" onChange={(e)=> getsupNum(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your your supervisors number.
            </Form.Control.Feedback>
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
              <Form.Control required type="date" onChange={(e)=> getempStartDate(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter the job start date.
            </Form.Control.Feedback>
            </Col>

            <Col sm="auto">
              <Form.Label>End:</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control required type="date" onChange={(e)=> getempEndDate(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter the job end date.
            </Form.Control.Feedback>
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
              <Form.Select required defaultValue="Pick An Employment Status" onChange={(e)=> getempStatus(e.target.value)}>
                <option></option>
                <option>part-time (at least 20 hours per week)</option>
                <option>full-time (at least 40 hours per week)</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please pick your employment status.
            </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Job Title:</Form.Label>
            </Col>
            <Col>
              <Form.Control required placeholder="Enter your Job title" onChange={(e)=> getjobTitle(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter your job title.
            </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Label></Form.Label>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Job Responsibilities:</Form.Label>
            </Col>
            <Col>
              <Form.Control required as="textarea" placeholder="Enter the responcibilities of your job" style={{ height: '100px' }} onChange={(e)=> getjobRes(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please the job Responsibilities.
            </Form.Control.Feedback>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form align='left'><b>NOTE: A copy of your college transcript must be submitted with this application! You may obtain a copy from Leonet.</b></Form>
          </Form.Group>

          <Row id="FIX">
            <Col xs="auto">
              <Form.Label>Student Digital Signature:</Form.Label>
            </Col>
            <Col xs="auto">
              <Form.Check required type="checkbox" />
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please give your digital signature.
            </Form.Control.Feedback>
            </Col>
            <Col xs="auto">
              <Form.Label>Date:</Form.Label>
              </Col>
            <Col xs={2}>
              <Form.Control required type="date" onChange={(e)=> getstuDigSigDate401(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter the date.
            </Form.Control.Feedback>
            </Col>
          </Row>
          {/* <Button variant="primary" onClick={handleSubmit}>
            Next Page
          </Button> */}

          <Button variant="primary" type="submit">
            Next Form
          </Button>
        

        </Form>
        </div>
        <div id="stu402">

        <Form noValidate validated={validated2} onSubmit={handleSubmit2}>

        <Form.Group className="mb-3">
            <Form.Label><b>CS Form 402</b></Form.Label>
            <Form.Label><b>Internship Employer Agreement</b></Form.Label>
          </Form.Group>

          <Row>
            <Col>
              <Form.Control required type="text" defaultValue = {name} placeholder="Student Name" disabled/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              HOW DID YOU BREAK THIS you numpty!?
            </Form.Control.Feedback>
            </Col>

            <Col xs="auto">
              <Form.Label>will be employed by</Form.Label>
            </Col>
            <Col>
              <Form.Control required type="text" defaultValue = {comName} placeholder="Company Name" disabled/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              HOW DID YOU BREAK THIS you numpty!?
            </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>during the semester</Form.Label>
            </Col>
            <Col>
              <Form.Control required placeholder="Enter semester and year" onChange={(e)=> getsemnyear(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter a semester term and year.
            </Form.Control.Feedback>
            </Col>
          </Row>

          <Form.Label></Form.Label>
          <Row>
            <Col xs="auto">
              <Form.Label>The student will work</Form.Label>
            </Col>
            <Col xs={3}>
              <Form.Control required type="text" maxlength="3" pattern="[0-9]*" placeholder="Enter hours" onChange={(e)=> gethourswork(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter how many hours you will work a week.
            </Form.Control.Feedback>
            </Col>

            <Col xs="auto">
              <Form.Label>hours per week for the semester beginning</Form.Label>
            </Col>
            <Col xs={2}>
              <Form.Control required defaultValue = {empStartDate} type="date" disabled/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              HOW DID YOU BREAK THIS you numpty!?
            </Form.Control.Feedback>
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
              <Form.Control required defaultValue = {empEndDate} type="date" disabled/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              HOW DID YOU BREAK THIS you numpty!?
            </Form.Control.Feedback>
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

          <Form.Label></Form.Label>

          <Row className="mb-3">
            <Form.Group as={Col} xs={7}>
              <Form.Check required type="checkbox"/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please give your digital signature.
            </Form.Control.Feedback>
              <Form.Label>Student's Digital Signature</Form.Label>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Control required type="date" onChange={(e)=> getstuDigSigDate402(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter the date.
            </Form.Control.Feedback>
              <Form.Label>Date</Form.Label>
            </Form.Group>
          </Row>


          <Button variant="primary" type="submit">
            Next Form
          </Button>

        </Form>
        </div>
        <div id="stu403">
        <Form noValidate validated={validated3} onSubmit={handleSubmit3}>

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
                <Form.Control required type="text" placeholder="" onChange={(e)=> getgoal1(e.target.value)}/>
                <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
                Please enter a goal.
            </Form.Control.Feedback>
              </Col>

              <Col xs="auto">
                <Form.Label>Supervisor’s Rating (%)</Form.Label>
              </Col>
              <Col>
                <Form.Control disabled type="number" placeholder="Enter %" />
                <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
                Please enter a precentage.
            </Form.Control.Feedback>
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
                <Form.Control required type="text" placeholder="" onChange={(e)=> getgoal2(e.target.value)}/>
                <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
                Please enter a goal.
            </Form.Control.Feedback>
              </Col>

              <Col xs="auto">
                <Form.Label>Supervisor’s Rating (%)</Form.Label>
              </Col>
              <Col>
                <Form.Control disabled type="number" placeholder="Enter %" />
                <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
                Please enter a precentage.
            </Form.Control.Feedback>
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
                <Form.Control required type="text" placeholder="" onChange={(e)=> getgoal3(e.target.value)}/>
                <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
                Please enter a goal.
            </Form.Control.Feedback>
              </Col>

              <Col xs="auto">
                <Form.Label>Supervisor’s Rating (%)</Form.Label>
              </Col>
              <Col>
                <Form.Control disabled type="number" placeholder="Enter %" />
                <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
                Please enter a precentage.
            </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>

          <Form.Label></Form.Label>
          <Row className="mb-3">
            <Form.Group as={Col} xs={7}>
              <Form.Label>Student's Digital Signature</Form.Label>
              <Form.Check required type="checkbox"/>
            </Form.Group>

            <Form.Group as={Col} xs={2}>
              <Form.Label>Date</Form.Label>
              <Form.Control required type="date" onChange={(e)=> getstuDigSigDate403(e.target.value)}/>
              <Form.Control.Feedback type="invalid" style={{textAlign: "left"}}>
              Please enter the date.
            </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Label></Form.Label>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
        </div>

        <div id="formphase1check">
        </div>

        <div id="formdone">
          <Form>
            <Form.Group className="mb-3">
              Thank you for filling out the form, it has been sent to your listed employer for them to fill out.
            </Form.Group>

            <Row>

            </Row>
              <Button variant="primary" className="buttonyty" onClick={() => signOut()}>Secure Sign Out</Button>{' '}
          </Form>
        </div>
        {/* <Button variant="primary" onClick={addForm}>DEV BUTTON</Button> */}

      </div>
      </div>
      </Container>
    </div>
  ) : (<Redirect to = "/"/>);
}

export default App;
