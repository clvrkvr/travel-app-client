import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import TripForm from "./components/TripForm";
import SuccessfulPage from "./components/pages/SuccessfulPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/register-trip" component={TripForm} />
          <Route path="/activity-:page" component={SuccessfulPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
