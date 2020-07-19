/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/Product_detail.right.css';
import {FaHeart,FaFacebookF,FaGooglePlusG,FaTwitter,FaYoutube,FaShareAlt} from "react-icons/fa";
import Introduct_Film from './Introduce_Film';
class ProductDetailRight extends React.Component{
    render(){
      //chổ render này chưa hiểu nha
      const category=this.props.movieItem[0]&&this.props.movieItem[0].category;
      const description=this.props.movieItem[0]&&this.props.movieItem[0].description;
      const director=this.props.movieItem[0]&&this.props.movieItem[0].director;
      const duration=this.props.movieItem[0]&&this.props.movieItem[0].duration;
      const language=this.props.movieItem[0]&&this.props.movieItem[0].language;
      const name=this.props.movieItem[0]&&this.props.movieItem[0].name;
      const premiere_date=this.props.movieItem[0]&&this.props.movieItem[0].premiere_date;
      
      
        return (
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="movie-single-ct main-content">
              <h1 className="bd-hd">
                {name}
              </h1>
              <div className="social-btn">
                <a href="#" className="parent-btn">
                   <span className="boder-icon">
                       <FaHeart  color="red" className="icon1" />
                  </span> Add to Favorite
                </a>
                <div className="hover-bnt">
                  <a href="#" className="parent-btn">
                     <span className="boder-icon">
                         <FaShareAlt color="red"/>
                     </span>
                    share
                  </a>
                  <div className="hvr-item">
                    <a href="#" className="hvr-grow">
                      <FaFacebookF className="icon" color="white"/>
                    </a>
                    <a href="#" className="hvr-grow">
                    <FaGooglePlusG className="icon" color="white"/>
                    </a>
                    <a href="#" className="hvr-grow">
                    <FaTwitter className="icon" color="white"/>
                    </a>
                    <a href="#" className="hvr-grow">
                    <FaYoutube className="icon" color="white"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* do data*/}
            <Introduct_Film  movieItem={this.props.movieItem}/>
          </div>
        );
    }
}

export default ProductDetailRight;