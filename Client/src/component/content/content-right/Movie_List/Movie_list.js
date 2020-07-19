/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../../../../css/MovieList.css';
import { BsFillStarFill } from "react-icons/bs";
import MovieItem from './MoiveItem';


import { Link } from 'react-router-dom';

class MovieList extends React.Component{
    render(){
        
        return (
          <div className="flex-wrap-movielist">
             <MovieItem 
             data={this.props.data}
             dataName={this.props.dataName} 

             />

            <div className="movie-item-style-2 movie-item-style-1">
              <img src={require('../../../../images/uploads/mv4.jpg')} alt />
              <div className="hvr-inner">
                <a >
                  {" "}
                  Read more <i className="ion-android-arrow-dropright" />{" "}
                </a>
              </div>
              <div className="mv-item-infor">
                <h6>
                  <a >oblivion</a>
                </h6>
                <p className="rate">
                  {/* <i className="ion-android-star" /> */}
                  <BsFillStarFill className="icon-start" size='25px' />
                  <span>8.1</span> /10
                </p>
              </div>
            </div>

            <div className="movie-item-style-2 movie-item-style-1">
              <img src={require('../../../../images/uploads/mv3.jpg')} alt />
              <div className="hvr-inner">
                <a >
                  {" "}
                  Read more <i className="ion-android-arrow-dropright" />{" "}
                </a>
              </div>
              <div className="mv-item-infor">
                <h6>
                  <a >oblivion</a>
                </h6>
                <p className="rate">
                  {/* <i className="ion-android-star" /> */}
                  <BsFillStarFill className="icon-start" size='25px' />
                  <span>8.1</span> /10
                </p>
              </div>
            </div>

            <div className="movie-item-style-2 movie-item-style-1">
              <img src={require('../../../../images/uploads/mv5.jpg')} alt />
              <div className="hvr-inner">
                <a >
                  {" "}
                  Read more <i className="ion-android-arrow-dropright" />{" "}
                </a>
              </div>
              <div className="mv-item-infor">
                <h6>
                  <a >oblivion</a>
                </h6>
                <p className="rate">
                  {/* <i className="ion-android-star" /> */}
                  <BsFillStarFill className="icon-start" size='25px' />
                  <span>8.1</span> /10
                </p>
              </div>
            </div>
          </div>
        );
    }
}
export default MovieList;