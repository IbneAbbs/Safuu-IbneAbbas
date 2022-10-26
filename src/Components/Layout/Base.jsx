import React from "react";
import Header from "./Header";

const Base = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Base;
