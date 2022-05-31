import React    from "react";
import template from "./FirstComponent.jsx";

class FirstComponent extends React.Component {
  
  render() {
    return template.call(this);
  }
}

export default FirstComponent;
