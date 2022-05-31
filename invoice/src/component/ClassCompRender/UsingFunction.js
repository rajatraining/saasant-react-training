import React from "react";

import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class UsingFunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, inputText: "" };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleInpChange = this.handleInpChange.bind(this);
    let myname = 'This is message'; 
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  handleInpChange(event) {
    this.setState({ inputText: event.target.value });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LogoutButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <input
          type={"text"}
          value={this.state.inputText}
          onChange={this.handleInpChange}
        ></input>

        {this.state.inputText}
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default UsingFunction;
