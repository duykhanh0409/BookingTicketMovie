/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaFacebookF,FaTwitter,FaGooglePlusG,FaYoutube } from "react-icons/fa";
import Slide from './sliderItem';
class Slider extends React.Component{
    render(){
        return (
          <div className="slider movie-items">
            <div className="container" style={{ marginTop: "50px" }}>
              <div className="row">
                <div className="social-link">
                  <p>Follow us: </p>
                  <a href="#">
                    <FaFacebookF size="15px" />
                  </a>
                  <a href="#">
                    <FaTwitter size="15px" />
                  </a>
                  <a href="#">
                    <FaGooglePlusG size="15px" />
                  </a>
                  <a href="#">
                    <FaYoutube size="15px" />
                  </a>
                </div>
                <div className="slick-multiItemSlider">
                  <Slide />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Slider;