/* eslint-disable no-useless-constructor */
import React from 'react';
import Header from '../component/header/Header';
//import HomePage from './HomePage';
import Footer from '../component/Footer/Footer';
//import MovieDetail from '../component/Product_detail/index';
//import Booking_Page from '../component/Booking_Page/index';

class PublicLayout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Header />
            {this.props.children}
            <Footer/> 
            </>
        );
    };
}

export default PublicLayout;