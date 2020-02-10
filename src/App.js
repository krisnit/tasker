import React from "react";
import Header from "./components/Layout/Header";
import Routing from "./components/Routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";
import { auth, createProfileDocument } from "./Firebase";
export const UserContext = React.createContext(null);

export const App = () => {
  const [currentUser, setCurrentUser] = React.useState({});
  React.useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async currentUser => {
      if (currentUser) {
        const userRef = await createProfileDocument(currentUser);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(null);
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
