import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import "./Headers.scss";
import { auth } from "../../Firebase";
import { withRouter } from "react-router-dom";

const Header = props => {
  console.log(props);
  const { displayName } = props;
  console.log(displayName);
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="ToDoList" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
            <li>Welcome {displayName}</li>
            {displayName ? (
              <li onClick={() => auth.signOut()}>SignOut</li>
            ) : (
              <li
                onClick={() => {
                  props.history.push("/signin");
                }}>
                SignIn
              </li>
            )}
            <li>Tasks</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);
