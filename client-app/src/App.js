import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import React from "react";
import Formsheet from "./Contain/Form/Form"
import Formiksheet from "./Contain/Formik test/Form"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
        <Switch>
          <Route exact path="/" component={Formsheet}/>
          <Route exact path="/test" component={Formiksheet}/>
          {/* <Route component={Err404}/>  */}
        </Switch>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
