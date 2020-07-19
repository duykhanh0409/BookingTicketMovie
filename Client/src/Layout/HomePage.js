import React from 'react';

import Slider from '../component/header/slider';
import Content from '../component/content/index';
import Header from '../component/header/Header';
import Footer from '../component/Footer/Footer';
class HomePage extends React.Component{
    render(){
        return(
            <>
            <Header/>
            <Slider/>
            <Content/>
            <Footer/>
            </>
        )
    }
}
export default HomePage;