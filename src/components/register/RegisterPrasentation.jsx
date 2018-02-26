import React from "react";
import Login from "../login";
import Gallery from "../gallery";
import "./register.css";

function registerPrasentation({
  newName,
  newEmail,
  newPass,
  send,
  name,
  checkLogin,
  callToSwitch,
  callTodisplay,
  callToGallery,
  callToLogin
}) {
  return (
    <div>
    
      {callToSwitch && (
        <Login checkLogin={checkLogin} handelSwitch={callTodisplay} />
      )}
     
      
      {callToLogin && (
        <div class="register_container">
        <form onSubmit={send}>
          <label>
            User Name:
            <input
              type="text"
              name="userName"
              value={newName}
              onChange={name}
            />
          </label>
          <br />
          <br />
          <label>
            Email Adress:
            <input
              type="email"
              name="userEmail"
              value={newEmail}
              onChange={name}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              name="userPass"
              value={newPass}
              onChange={name}
            />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        </div>
      )}
      
      
      {callToGallery && <Gallery />}
    
    </div>
    
  );
}
export default registerPrasentation;
