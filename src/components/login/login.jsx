import React from 'react';
import './login.css';

function Login(props) {
        return(
            <div className="login_container" style= {{justifyContent: 'center'}}>
            <form onSubmit={props.verify}>
                <label>
                    Name:
                    <input type="text" name="userName" placeholder="enter your name" value={props.user} onChange={props.name}/>
                </label><br/><br/>
                <label>Password:
                    <input type="password" name="passWord" onChange={props.name}/>
                </label><br/><br/>
                <input type="submit" value="Submit" />
                 <input type="button" value="register" onClick = {props.handleOutput}/>
            </form>
            </div>
        );
    }
export default Login;