import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

//layout mà cách này rờm ra. thử lại sao.
import PublicLayout from './Layout/PublicLayout';
//
import LayoutRoute from './Route/LayoutRoute';
//public page
const HomePage=lazy(()=>import('./Layout/HomePage'));
const MovieDetailPage=lazy(()=>import('./Layout/MovieDetailLayout'));
const BookingPage=lazy(()=>import('./Layout/BookingLayout'));
const LoginPage=lazy(()=>import('./authendication/SignIn/index'));
const SignUpPage=lazy(()=>import('./authendication/SignUp/index'));
const MovieDetail=lazy(()=>import('./component/Product_detail/index'));
const Profile=lazy(()=>import('./Layout/Profile'));
const Routes=(props)=>{
    const loginFace=useSelector((state)=>state.isLogin);
    const loginUser=useSelector((state)=>state.loginUser);
      console.log(loginUser);//false
     

      
      // function PrivateRouteFa({ children, ...rest }) {
      //   return (
      //     <Route
      //       {...rest}
      //       render={({ location }) =>
      //         props.checkUserFbLogined.auth ? (
      //           children
      //         ) : (
      //           <Redirect
      //             to={{
      //               pathname: "/login",
      //               state: { from: location }
      //             }}
      //           />
      //         )
      //       }
      //     />
      //   );
      // }

      // function PrivateRouteUser({ children, ...rest }) {
      //   return (
      //     <Route
      //       {...rest}
      //       render={({ location }) =>
      //         props.checkUserLogined.authUser ? (
      //           children
      //         ) : (
      //           <Redirect
      //             to={{
      //               pathname: "/login",
      //               state: { from: location }
      //             }}
      //           />
      //         )
      //       }
      //     />
      //   );
      // }
      
      //let PrivateRoute=props.checkUserFbLogined.auth?PrivateRouteFa:PrivateRouteUser;
      const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
          loginUser.authUser === true
            ? <Component {...props} />
            : <Redirect to={{
              pathname:'/login',
              state:{from:props.location}
              
            }} />
        )} />
      )
    return(
        <Suspense fallback={<div>Loading Page</div>}>
            
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/moviedetail/:id' component={MovieDetailPage}/>
                    <Route path='/moviedetail' component={MovieDetailPage}/>
                    <PrivateRoute path='/booking/:id' component={BookingPage}/>
                    <Route path='/booking/:id' component={BookingPage} />
                    <PrivateRoute path='/booking'><BookingPage/></PrivateRoute>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignUpPage}/>
                    <Route exact path="/profile" component={Profile}/>
                    {/* <LayoutRoute
                        exact
                        path="/"
                        component={HomePage}
                        LayoutRoute={PublicLayout}
                    />
                    <LayoutRoute
                        exact
                        path="/moviedetail"
                        component={MovieDetailPage}
                        LayoutRoute={PublicLayout}
                    />
                    <LayoutRoute
                        exact
                        path="/booking"
                        component={BookingPage}
                        LayoutRoute={PublicLayout}
                    />
                     */}
                    <Route path="/NotFount" component={() => '404 NOT FOUND'} />
                </Switch>
            
        </Suspense>
    )
}

const mapStateToProps=(state)=>{
    return{
      checkUserFbLogined:state.isLogin,
      checkUserLogined:state.loginUser
    }
  }

export default connect(mapStateToProps,null)(Routes);




