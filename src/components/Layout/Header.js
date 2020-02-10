import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import "./Headers.scss";

export const Header = props => {
  const { id, displayName, email } = props;
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
            {displayName ? <li>SignOut</li> : <li>SignIn</li>}
            <li>Tasks</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
