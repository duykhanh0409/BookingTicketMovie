/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';
import fire from '../config/Fire';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';

class SignUp extends React.Component{
  constructor(props){
    super(props);

    this.state={
      username:"",
      email:"",
      password:"",
      repassword:""
    }
  }
  signUpSuccess=()=>{
    toast.success("Đăng ký thành công", {position:toast.POSITION.TOP_CENTER,
      autoClose:3000
    })
  }

  signUpFail=()=>{
    toast.success("Đăng ký thất bại",{position:toast.POSITION.TOP_CENTER,
      autoClose:3000
    })
  }

  signUp=(e)=>{
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then((u)=>{
        this.signUpSuccess();
    })
    .catch(err=>{
      this.signUpFail();
    })
  }

  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
    render(){
        return (
          <div className="wrap" >
            <div className="login-wrapper" id="signup-content">
              <div className="login-content signup2">
              <Link to='./login'>
                <a  className="close">
                  Login
                </a>
                </Link>
                <h3>sign up</h3>
                <form method="post" action="#">
                  <div className="row">
                    <label htmlFor="username-2">
                      Username:
                      <input
                        type="text"
                        name="username"
                        id="username-2"
                        placeholder="Hugh Jackman"
                        // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                        // required="required"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label htmlFor="email-2">
                      your email:
                      <input
                       
                        name="email"
                        id="email-2"
                        placeholder
                        // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        // required="required"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label htmlFor="password-2">
                      Password:
                      <input
                        type="password"
                        name="password"
                        id="password-2"
                        placeholder
                        // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        // required="required"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div className="row">
                    <label htmlFor="repassword-2">
                      re-type Password:
                      <input
                        type="password"
                        name="repassword"
                        id="repassword-2"
                        placeholder
                        // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        // required="required"
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div className="row">
                    <button onClick={this.signUp}>sign up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default SignUp;