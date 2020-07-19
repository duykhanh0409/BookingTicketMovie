/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebookSquare,FaTwitter } from "react-icons/fa";
import Form from './form';
import LoginFacebook from './SignInFaceBook';





class Login extends React.Component{

    render(){
        return (
          <div className="container-fluid">
            <div className="overlay">
              <div className="login-wrapper" id="login-content">
                <div className="login-content">
                  <h3>LOGIN</h3>
                  <Form from={this.props.from}/>
                  <div className="row-2">
                    <p>Or via social</p>
                    <div className="social-btn-2">
                      {/* <a className="fb" href="#">
                        <FaFacebookSquare size="20px" className="iconFa" />
                        Facebook
                      </a> */}
                      <LoginFacebook/> 
                      <a className="tw" href="#">
                        <FaTwitter size="20px" className="iconFa" />
                        twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Login;