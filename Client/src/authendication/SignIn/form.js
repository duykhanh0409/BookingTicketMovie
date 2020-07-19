/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import fire from "../config/Fire";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import * as actions from "../../store/action/isLogin";

toast.configure();

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      email: "",
      password: "",
      loginErr: "",
    };
  }
  CustumToast = ({ closeToast }) => {
    return (
      <button onClick={closeToast}>
        Đăng nhập thành công với Email:
        {this.state.email}
      </button>
    );
  };
  LoginSuccess = () => {
    toast.success(<this.CustumToast />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
    });
    this.setState({ auth: true });
  };
  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        this.LoginSuccess();
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loginErr: err.message,
        });
      });
    this.props.changeInforUser(this.state);
  };
  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.state.auth);

    let { from } = this.props || { from: { pathname: "/" } };
    console.log(from);
    if (this.state.auth === true)
      return <Redirect to={this.props.from.pathname} />; // khong hoat dong
    let errNotification = this.state.loginErr ? (
      <div id="err">{this.state.loginErr}</div>
    ) : (
      ""
    );
    return (
      <>
        {errNotification}
        <form method="post" action="#">
          <div className="row">
            <label for="username">
              Username:
              <input
                type="text"
                name="email"
                id="username"
                placeholder="name"
                pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                value={this.state.email}
                onChange={this.onHandleChange}
              />
            </label>
          </div>
          <div className="row">
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.onHandleChange}
              />
            </label>
          </div>

          <div className="row">
            <div className="remember">
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  defaultValue="Remember me"
                />
                <span>Remember me</span>
              </div>
              <a href="#">Forget password ?</a>
            </div>
          </div>

          <div className="row">
            <button type="submit" onClick={this.login}>
              Login
            </button>
            <button style={{ marginTop: "10px" }}>
              <Link to="/signup">SignUp</Link>
            </button>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.isLogin, //chua dung dc
    accountUser: state.loginUser, //chua dung un
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    changeInforUser: (infor) => {
      dispatch(actions.onChangeLoginUserInfor(infor));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
