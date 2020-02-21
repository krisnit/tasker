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
  console.log(props);
  const [currentUser, setCurrentUser] = React.useState(null);
  React.useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async currentUser => {
      if (currentUser) {
        const userRef = await createProfileDocument(currentUser);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
          props.setUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(null);
        props.setUser(null);
      }
    });
    return () => {
      unSubscribeFromAuth();
    };
  }, []);
  return (
    <UserContext.Provider value={currentUser}>
      <Router>
        <div className="App">
          <Header {...currentUser} />
          <Routing />
        </div>
      </Router>
    </UserContext.Provider>
  );
};

const mapState = ({ todos, user }) => ({ todos, user });
const mapDispatch = dispatch => ({
  setUser: data => dispatch(setUser(data))
});

export default connect(mapState, mapDispatch)(App);
