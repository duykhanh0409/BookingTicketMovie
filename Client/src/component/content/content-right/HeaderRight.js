/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../../css/content_sort.css';
import { FaAlignJustify,FaStackExchange } from "react-icons/fa";



class HeaderRight extends React.Component{
    render(){
        return (
          <div className="topbar-filter">
            <p>
              Found <span>1,608 movies</span> in total
            </p>
            <label>Sort by:</label>
            <select className="select-film">
              <option value="popularity">Popularity Descending</option>
              <option value="popularity">Popularity Ascending</option>
              <option value="rating">Rating Descending</option>
              <option value="rating">Rating Ascending</option>
              <option value="date">Release date Descending</option>
              <option value="date">Release date Ascending</option>
            </select>
            <a className="list">
              <FaAlignJustify color='#abb7c4' className="icon"/>
            </a>
            <a  className="grid">
            <FaStackExchange  color='#abb7c4' className="icon"/>
            </a>
          </div>
        );
    }
}

export default HeaderRight;