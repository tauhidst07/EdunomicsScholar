import React from "react";
import "../src/styles/App.css";
import LandingPage from "./components/common/LandingPage";
import SignUp from "./components/donar/SignUp";
import SignUpApplicant from "./components/applicant/SignUpApplicant";
import DonerGrantPage from "./components/donar/DonerGrantPage";
import Login from "./components/donar/Login";
import { Route, Switch } from "react-router-dom";
import AppliGrantPage from "./components/applicant/AppliGrantPage";
import JoinDoner from "./components/donar/JoinDoner";
import JoinAppli from "./components/applicant/JoinAppli";
import LoginApplicant from "./components/applicant/LoginApplicant";
import Dashboard from "./components/applicant/Dashboard";
import Profile from "./components/applicant/Profile";
import About from "./components/common/About";
import ContactUs from "./components/common/ContactUs";
import Faq from "./components/common/Faq";
import HowItWorks from "./components/common/HowItWorks";
import Pricing from "./components/common/Pricing";
import Award from "./components/common/AwardFeatures";
import DonerCredits from "./components/common/DonerCredits";
import Careers from "./components/common/Careers";
import Privacy from "./components/common/Privacy";
import Terms from "./components/common/TermsOfUse";
import Press from "./components/common/Press";
import Enroll from "./components/common/EnrollmentS";
import ResearchReport from "./components/common/ReseacrhReport";
import ScholorshipRules from "./components/common/ScholarRules";
import EasyScholar from "./components/common/EasyScholar";
import ScholarshipforWomen from "./components/common/ScholarshipforWomen";
import DonarDashboard from "./components/donar/DonarDashboard";
import DonerProfile from "./components/donar/DonerProfile";
import CreateScholarship from "./components/donar/CreateScholarship";
import AllScholarship from "./components/donar/AllScholarship";
import AllContact from "./components/common/AllContactUs";
import AppliedScholarship from "./components/AllApliScholarship";
import SettingsDoner from "./components/donar/SettingsDoner";
import ViewScholarship from "./components/donar/ViewScholarship";
import MyApplications from "./components/applicant/MyApplications";
import AppliedApplicants from "./components/donar/AppliedApplicants";
import MoreAboutDoner from "./components/donar/MoreAboutDoner";
import MoreAboutApplicant from "./components/donar/MoreAboutApplicant";
import InviteApplicants from "./components/donar/InviteApplicants";
import AllApliScholarship from "./components/AllApliScholarship";
import Footer from "./components/Footer";
import SettingAppli from "./components/applicant/SettingAppli";
import ApliLeaders from "./components/applicant/ApliLeaders";
import DonerLeaders from "./components/donar/DonerLeaders";

import InviteFriendApli from "./components/applicant/InviteFriendApli";
import NotFound from "./components/common/NotFound";
import ApliViewScholarship from "./components/ApliViewScholarship";
import ApliMoreAboutDoner from "./components/ApliMoreAboutDoner";
import SuperAdminDashboard from "./components/SuperAdminDashboard";
import Chat from "./components/Chat";

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
        <Route exact path="/applied-Scholarship">
          <AppliedScholarship />
        </Route>
        <Route exact path="/settings-donar">
          <SettingsDoner />
        </Route>
        <Route exact path="/view-scholarship/:scholarParams">
          <ViewScholarship />
        </Route>
        <Route exact path="/myapplications/:scholarid">
          <MyApplications />
        </Route>
        <Route exact path="/more-about-donar/:donarId">
          <MoreAboutDoner />
        </Route>
        <Route exact path="/more-about-applicant">
          <MoreAboutApplicant />
        </Route>
        <Route exact path="/invite-applicant">
          <InviteApplicants />
        </Route>
        <Route exact path="/appliedapplicants/:id">
          <AppliedApplicants />
        </Route>
        <Route exact path="/testing">
          <Footer />
        </Route>
        <Route exact path="/doner-leaders">
          <DonerLeaders />
        </Route>
        <Route exact path="/all-apli-scholarships">
          <AllApliScholarship />
        </Route>
        <Route exact path="/apli-leaders">
          <ApliLeaders />
        </Route>
        <Route exact path="/settings-appli">
          <SettingAppli />
        </Route>
        <Route exact path="/invite-apli">
          <InviteFriendApli />
        </Route>
        <Route exact path="/apli-view-scholar/:scholarParams">
          <ApliViewScholarship />
        </Route>
        <Route exact path="/apli-more-aboutdoner/:donarId">
          <ApliMoreAboutDoner />
        </Route>
        <Route exact path="/superAdminDashboard">
          <SuperAdminDashboard />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
