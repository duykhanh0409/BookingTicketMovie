/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './css/header.css';
import './css/slider.css';
import Header from './component/header/Header';
import Slider from './component/header/slider';
import Content from './component/content/index';
import Footer from './component/Footer/Footer';
import MovieDetail from './component/Product_detail/index';
import Booking_Page from './component/Booking_Page/index';
import LoginPage from './authendication/SignIn';
import Routes from './Routes';



function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <LoginPage/> */}

      <Routes />
      {/* <Footer/> */}

    </div>
  );
  }

export default App;
