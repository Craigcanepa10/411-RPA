import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import React from "react";
import Formsheet from "./Contain/Form/Form"
import Home from "./Contain/Home/Home"
import FASH from "./Contain/FASH/FASH"
import Fac from "./Contain/Facilty/Facilty"
import Emp from "./Contain/Employer/Employer"
import Stu from "./Contain/Student/Student"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
        <Switch>
          <Route exact path="/" component={Home}/> {/* Home Page */}
          <Route exact path="/form" component={Formsheet}/> {/* Form Page */}
          <Route exact path="/totheleftnowyall" component={FASH}/> {/* Test Page remove before build */}
          <Route exact path="/student" component={Stu}/> {/* Employer page to search for the form by its id form will only show if its their turn */}
          <Route exact path="/student/:formident" component={FASH}/> {/* Employer page for filling out their parts */}
          <Route exact path="/employer" component={Emp}/> {/* Employer page to search for the form by its id form will only show if its their turn */}
          <Route exact path="/employer/:formident" component={FASH}/> {/* Employer page for filling out their parts */}
          <Route exact path="/faculty" component={Fac}/> {/* Faculty page for filling out their parts */}
          <Route exact path="/faculty/:formident" component={FASH}/> {/* Faculty page to search for the form by its id form will only show if its their turn */}
          {/* <Route component={Err404}/>  */}
        </Switch>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
