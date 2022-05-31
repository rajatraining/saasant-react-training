import "./FirstComponent.css";
import React from "react";
import BodyComponent from "../BodyComponent/BodyComponent";

function template() {
  return (
    <div className="first-component">
      <BodyComponent name="Raja" dept="IT" />
      <h1>FirstComponent  from</h1>
      <form>
        <input type={Text} name="myinput"></input>
      </form>

    </div>
  );
};

export default template;
