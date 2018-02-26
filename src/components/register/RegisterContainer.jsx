import React from "react";
import ReactDOM from "react-dom";
import RegisterPrasentation from "./RegisterPrasentation";

class registerContainer extends React.Component {
  constructor(props) {
    super(props);
    const loadData = JSON.parse(localStorage.getItem("myData")) || [];
    this.state = {
      userName: "",
      userEmail: "",
      userPass: "",
      data: loadData,
      source: [],
      toggleLoginRester: true,
      toggleGallery: false,
      toggleLogin: false
    };
    this.handleEvents = this.handleEvents.bind(this);
  }
  handleEvents(e) {
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
    
  }
  storeData = e => {
    e.preventDefault();
    const store = [...this.state.data];
    store.push({
      userName: this.state.userName,
      userEmail: this.state.userEmail,
      userPass: this.state.userPass
    });
    this.setState({ data: store, userName: "", userEmail: "", userPass: "", toggleLoginRester: true,
        toggleGallery: false,
        toggleLogin:false});
  };
  componentDidUpdate() {
    localStorage.setItem("myData", JSON.stringify(this.state.data));
    
  }
  loginVerify = (e, userName, userPass) => {
    e.preventDefault();
    let cond;
    const user = [...this.state.data];
    const userDetails = user.find(function(item) {
      if(item.userName === userName && item.userPass === userPass){
       cond = true;
       return true;
      }
      else{
        cond = false;
      }
    });
    if(cond){
    this.setState({
        toggleGallery: cond,
        toggleLoginRester: false,
        toggleLogin: false
      });
    }else{
      this.setState({
        toggleGallery: false,
        toggleLoginRester: false,
        toggleLogin: true
      });
    }
};
display = () => {
    this.setState({
        toggleLoginRester: false,
        toggleGallery: false,
        toggleLogin:true
    });
}

  render() {
    return (
      <RegisterPrasentation
        checkLogin={this.loginVerify}
        name={this.handleEvents}
        send={this.storeData}
        newName={this.state.userName}
        newEmail={this.state.userEmail}
        newPass={this.state.userPass}
        callToSwitch ={this.state.toggleLoginRester}
        callTodisplay = {this.display}
        callToGallery = {this.state.toggleGallery}
        callToLogin = {this.state.toggleLogin}
      />
    );
  }
}

export default registerContainer;
