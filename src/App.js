import React from "react";
import "../src/styles/App.css";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignUpApplicant from "./components/SignUpApplicant";
import DonerGrantPage from "./components/DonerGrantPage";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import AppliGrantPage from "./components/AppliGrantPage";
import JoinDoner from "./components/JoinDoner";
import JoinAppli from "./components/JoinAppli";

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
        <Route exact path="/donergrant">
          <DonerGrantPage />
        </Route>

        <Route exact path="/appligrant">
          <AppliGrantPage />
        </Route>
        <Route exact path="/joindoner">
          <JoinDoner />
        </Route>
        <Route exact path="/joinappli">
          <JoinAppli />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
