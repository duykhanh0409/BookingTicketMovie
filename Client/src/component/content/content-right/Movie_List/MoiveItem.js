/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link} from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import {connect} from 'react-redux';
import *as actions from '../../../../store/action/DataFilm';

const movieItem = (props)=> {
        
        const movieItem=props.data;
        console.log(movieItem);
        return(
            <>
            {movieItem.map(item=>(
              <div className="movie-item-style-2 movie-item-style-1">
              <img src={`http://ciname-nodejs-backend.herokuapp.com/movie/picture/${item.image[0]}`} alt height='261px' width='170px' />
              <div className="hvr-inner">
              <Link to={`/moviedetail/${item.id}`} style={{textDecoration:"none"}} >
                <a >
                  {" "}
                  Read more <i className="ion-android-arrow-dropright" />{" "}
                </a>
                </Link>
              </div>
              <div className="mv-item-infor">
                <h6>
                  <a >{item.name}</a>
                </h6>
                <p className="rate">
                  {/* <i className="ion-android-star" /> */}
                  <BsFillStarFill className="icon-start" size='25px' />
                  <span>8.1</span> /10
                </p>
              </div>
            </div>
            ))}
            </>
        )
    
}

const mapStateToProps=(state)=>{
  return{
   movieItem:state.dataFilm
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      getData:()=>dispatch(actions.getData())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(movieItem);