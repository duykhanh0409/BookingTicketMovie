/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";
import Carousel from 'react-elastic-carousel'
import Item from "./Item";

//import {slider1} from '../../images/slider1.jpg';

class Slide extends React.Component{
  render(){
    return (
      
      <Carousel itemsToShow={4} style={{ width: "1300px" }} autoPlaySpeed={1500}>
        <Item>
          <div className="movie-item">
            <img
              src={require("../../images/slider1.jpg")}
              style={{ margin: "0 15px" }}
              width="285" height="437"
            />
            <div class="title-in">
	    				<div class="cate">
	    					<span class="blue"><a href="#">Sci-fi</a></span>
	    				</div>
	    				<h6><a href="#">Interstellar</a></h6>
	    				<p><i class="ion-android-star"></i><span>7.4</span> /10</p>
	    			</div>
          </div>
        </Item>
        <Item>
          <div className="movie-item">
            <img
              src={require("../../images/uploads/slider2.jpg")}
              style={{ margin: "0 15px" }}
              width="285" height="437"
            />
          </div>
        </Item>
        <Item>
          <div className="movie-item">
            <img
              src={require("../../images/uploads/slider3.jpg")}
              style={{ margin: "0 15px" }}
              width="285" height="437"
            />
          </div>
        </Item>
        <Item>
          <div className="movie-item">
            <img
              src={require("../../images/uploads/slider4.jpg")}
              style={{ margin: "0 15px" }}
              width="285" height="437"
            />
          </div>
        </Item>
        <Item>
          <div className="movie-item">
            <img
              src={require("../../images/slider1.jpg")}
              style={{ margin: "0 15px" }}
              width="285" height="437"
            />
          </div>
        </Item>
        <Item>
          <div className="movie-item">
            <img
              src={require("../../images/slider1.jpg")}
              style={{ margin: "0 15px" }}
              width="285" height="437"
            />
          </div>
        </Item>
        <Item>
          <div className="movie-item">
            <img
              src={require("../../images/slider1.jpg")}
              style={{ margin: "0 15px" }}
              width="285" height="437"
            />
          </div>
        </Item>
        <Item>
          <div className="movie-item">
            <img
              src={require("../../images/slider1.jpg")}
              style={{ margin: "0 15px" }}
              width="285" height="437"
            />
          </div>
        </Item>
      </Carousel>
    );
  }
}
  
export default Slide;
  

