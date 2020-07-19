import React from 'react';

import FacebookLogin from 'react-facebook-login';
import *as actions from '../../store/action/isLogin';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class LoginFacebook extends React.Component{
   
      componentClicked=()=>{
         
      }

      responseFacebook=(response)=>{
        console.log(response);
        if(response.status !=='unknown'){
        this.props.onChangeLoginFaInfor(response);
        
    }
      }
    render(){
        console.log(this.props.isLoginFaInfor);
        let facebookData;
      this.props.isLoginFaInfor.auth
        ? (facebookData = <div>Hi</div>)
        : (facebookData = (
            
                <FacebookLogin
                appId="261292514947420"
                autoLoad={false}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                textButton="FaceBook"
                icon="fa-facebook"
                redirectUri="./"
                />
           
          ));
        return(
            <>
                {facebookData}
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        isLoginFaInfor: state.isLogin
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onChangeLoginFaInfor:(infor)=>{
            dispatch(actions.onChangeLoginFaInfor(infor));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginFacebook);