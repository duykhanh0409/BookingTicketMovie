/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../images/logo1.png';
import '../../css/header.css';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';


class Header extends React.Component{
  constructor(props){
    super(props);
    
  }

  
    render(){
      
     //console.log(this.props.account,"day");
     //console.log(this.props.accountUser,"taikhoan");
     //bat xác thưc tài khoản face
     var accountInfor = this.props.account.auth  ? (
       <>
         <div className="account-name">{this.props.account.name}</div>
         <Link to="/profile">
         <img
           src={this.props.account.picture}
           alt={this.props.account.picture}
           style={{ borderRadius: "50px" }}
         />
         </Link>
       </>
     ) : (
       <>
         <li className="btn loginLink ">
           <Link to="/login">
             <a>Log in</a>
           </Link>
         </li>
         <li className="btn signupLink">
           <Link to="/signup">
             <a>sign up</a>
           </Link>
         </li>
       </>
     ); 

      //bắt xác thực tài khoản user
      var accountUser=this.props.accountUser.authUser?(
        <>
         <div className="account-name">Admin</div>
         <Link to="/profile">
         <img
           src={require('../../images/uploads/ava1.jpg')}
           style={{ borderRadius: "50px" }}
         />
         </Link>
       </>
      ): (
        <>
          <li className="btn loginLink ">
            <Link to="/login">
              <a>Log in</a>
            </Link>
          </li>
          <li className="btn signupLink">
            <Link to="/signup">
              <a>sign up</a>
            </Link>
          </li>
        </>
      ); 
     var account=this.props.account.auth? accountInfor: accountUser;
        return (
          <div className="header ">
            <div className="header-right container">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#">
                  <Link to="/">
                  <img src={logo} alt="logo" />
                  </Link>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Phim Đang Chiếu
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="#">
                          Phim Đang Chiếu
                        </a>

                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Phim Sắp Chiếu
                        </a>
                      </div>
                      
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        phim Đang Chiếu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        phim Sắp Chiếu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Lịch Chiếu
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">
                        Khuyến Mãi
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">
                        Blog
                      </a>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav flex-child-menu menu-right">
                    {/* <li className="btn loginLink ">
                      <Link to="/login">
                        <a href="#">Log in</a>
                      </Link>
                    </li> */}
                    {account}

                  
                  </ul>
                </div>
              </nav>
            </div>
            {/*phan search*/}
            <div className="top-search ">
              <input
                type="text"
                placeholder="                          Search for a movie, TV Show or celebrity that you are looking for"
              />
            </div>
          </div>
        );
    }
}

const mapStateToProps=(state)=>{
  return {
    account:state.isLogin,
    accountUser:state.loginUser
  }
}
export default connect(mapStateToProps,null)(Header);