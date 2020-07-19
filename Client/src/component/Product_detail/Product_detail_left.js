/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../../css/Product_detail_left.css';
import {FaPlay,FaRegCreditCard} from "react-icons/fa";
import { Link } from 'react-router-dom';


class ProductDetailLeft extends React.Component{
  constructor(props) {
   super(props)

  }

  onShowTimeFilm=()=>{
    this.props.onShowTimeFilm();
  }
  //get api xong nhấn dô button buy ticket để truyền data lên store
  // onShowSchedule=()=>{

  // }
    render(){
     
      const image=this.props.movieItem[0]&&this.props.movieItem[0].image[0];//chua hieu render ở đây lắm, 1 lần thì undefined

      //console.log(this.props.movieItem[0].image[0]);
     
    
        return (
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="movie-img sticky-sb">
              <img src={`http://ciname-nodejs-backend.herokuapp.com/movie/picture/${image}`} alt />
              <div className="movie-btn">
                <div className="btn-transform transform-vertical red">
                  <div>
                    <a className="item item-1 redbtn btn btn btn-danger" >
                      {" "}
                      <FaPlay color="white" style={{marginTop:'6px'}}/> Watch Trailer
                    </a>
                  </div>
                  <div>
                    <a
                      className="item item-2 redbtn fancybox-media hvr-grow"
                    >
                      <i className="ion-play" />
                    </a>
                  </div>
                </div>
                <div className="btn-transform transform-vertical">
                  <div>
                    <div
                    className="item item-1 yellowbtn btn btn-danger " 
                    onClick={this.onShowTimeFilm}
                    >
                      {" "}
                      <FaRegCreditCard className="icon" style={{marginTop:'6px'}} /> Buy ticket
                    </div>
                    
                  </div>
                  <div>
                    <a className="item item-2 yellowbtn">
                      <i className="ion-card" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

    }
}


export default ProductDetailLeft;