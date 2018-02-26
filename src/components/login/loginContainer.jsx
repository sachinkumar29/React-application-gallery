import Login from "./login";
import React from "react";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", passWord: "" };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  }
  handleEvent = e => {
    this.props.checkLogin(e, this.state.userName, this.state.passWord);
  };

  render() {
    return (
      <Login
        name={this.handleInput}
        user={this.state.userName}
        verify={this.handleEvent}
        handleOutput={this.props.handelSwitch}
      />
    );
  }
}
export default LoginContainer;
