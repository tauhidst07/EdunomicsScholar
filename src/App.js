import React from "react";
import "../src/styles/App.css";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignUpApplicant from "./components/SignUpApplicant";

import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signupApli">
          <SignUpApplicant />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
