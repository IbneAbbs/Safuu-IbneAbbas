import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Base = (props) => {
  return (
    <div>
      <Header />
      {/* <Sidebar/> */}
      {props.children}
    </div>
  );
};

export default Base;
