import React from "react";
import Header from "./components/Layout/Header";
import Routing from "./components/Routing/Routing";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { auth, createProfileDocument } from "./Firebase";
import { setUser } from "./store/user/userActions";
import { connect } from "react-redux";

export const UserContext = React.createContext(null);

const App = props => {
  React.useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async currentUser => {
      if (currentUser) {
        const userRef = await createProfileDocument(currentUser);
        userRef.onSnapshot(snapshot => {
          props.setUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        props.setUser(null);
      }
    });
    return () => {
      unSubscribeFromAuth();
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Header {...props.user} />
        <Routing />
      </div>
    </Router>
  );
};

const mapState = ({ todos, user }) => ({ todos, user });
const mapDispatch = dispatch => ({
  setUser: data => dispatch(setUser(data))
});

export default connect(mapState, mapDispatch)(App);
