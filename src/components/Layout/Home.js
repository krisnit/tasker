import React from "react";
import { SideBar } from "./SideBar";
import Tasks from "../Tasks/Tasks";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home" data-testid="home">
      <SideBar />
      <Tasks />
    </div>
  );
};
