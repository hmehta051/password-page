import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Body from "../components/Body";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="sidebarContainer">
        <Sidebar />
      </div>

      <div className="bodyContainer">
        <Topbar />
        <Body />
      </div>
    </div>
  );
};

export default Home;
