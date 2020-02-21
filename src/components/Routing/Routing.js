import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../Auth/SignIn";
import SignOut from "../Auth/SignOut";
import { Home } from "../Layout/Home";
import { UserContext } from "../../App";
import { withRouter } from "react-router-dom";

const Routing = props => {
  
  const currentUser = React.useContext(UserContext);
  console.log(currentUser);
  return (
    <Switch>
      <Route
        exact
        path="/signin"
        render={() => {
          return currentUser ? props.history.push("/") : <SignIn />;
        }}
      />
      <Route exact path="/SignOut" component={SignOut} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default withRouter(Routing);
