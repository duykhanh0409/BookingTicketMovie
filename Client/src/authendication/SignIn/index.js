import React from "react";

import Login from "./Header.login";
import "../../css/header.css";

class LoginPage extends React.Component {
  render() {
    return (
      <Login
        from={this.props.location.state ? this.props.location.state.from : {}}
      />
    );
  }
}

export default LoginPage;
