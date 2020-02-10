import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import { Home } from "../Layout/Home";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routing;
