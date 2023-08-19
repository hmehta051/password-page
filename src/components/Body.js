import React from "react";
import "../styles/Body.css";
import Table from "./Table";

const Body = () => {
  return (
    <div className="bodySubContainer">
      <div className="bodyInnerWrapper">
        <div className="bodyText">All Items</div>
        <div className="bodyTable">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Body;
