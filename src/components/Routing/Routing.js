import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../Auth/SignIn";
import SignOut from "../Auth/SignOut";
import { Home } from "../Layout/Home";
import { UserContext } from "../../App";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Routing = props => {
  return (
    <Switch>
      <Route
        exact
        path="/signin"
        render={() => {
          return props.user ? props.history.push("/") : <SignIn />;
        }}
      />
      <Route exact path="/SignOut" component={SignOut} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

const mapState = ({ user }) => ({ user });
export default withRouter(connect(mapState, null)(Routing));
