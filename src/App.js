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
import LoginApplicant from "./components/LoginApplicant";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Faq from "./components/Faq";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Award from "./components/AwardFeatures";
import DonerCredits from "./components/DonerCredits";
import Careers from "./components/Careers";
import Privacy from "./components/Privacy";
import Terms from "./components/TermsOfUse";
import Press from "./components/Press";
import Enroll from "./components/EnrollmentS";
import ResearchReport from "./components/ReseacrhReport";
import ScholorshipRules from "./components/ScholarRules";
import EasyScholar from "./components/EasyScholar";
import ScholarshipforWomen from "./components/ScholarshipforWomen";
import Leaders from "./components/Leaders";
import DonarDashboard from "./components/DonarDashboard";
import DonerProfile from "./components/DonerProfile";
import CreateScholarship from "./components/CreateScholarship";
import AllScholarship from "./components/AllScholarship";
import AllContact from "./components/AllContactUs";

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
        <Route exact path="/loginApli">
          <LoginApplicant />
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
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/how-it-works">
          <HowItWorks />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/award">
          <Award />
        </Route>
        <Route exact path="/doner-credits">
          <DonerCredits />
        </Route>
        <Route exact path="/careers">
          <Careers />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route exact path="/press">
          <Press />
        </Route>
        <Route exact path="/enroll">
          <Enroll />
        </Route>
        <Route exact path="/r-report">
          <ResearchReport />
        </Route>
        <Route exact path="/scholar-rules">
          <ScholorshipRules />
        </Route>
        <Route exact path="/easy-scholar">
          <EasyScholar />
        </Route>
        <Route exact path="/scholar-women">
          <ScholarshipforWomen />
        </Route>
        <Route exact path="/leaders">
          <Leaders />
        </Route>
        <Route exact path="/donar-dash">
          <DonarDashboard />
        </Route>
        <Route exact path="/donar-profile">
          <DonerProfile />
        </Route>
        <Route exact path="/create-scholar">
          <CreateScholarship />
        </Route>
        <Route exact path="/all-scholar">
          <AllScholarship />
        </Route>
        <Route exact path="/all-contact">
          <AllContact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
