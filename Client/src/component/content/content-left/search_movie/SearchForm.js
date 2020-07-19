/* eslint-disable no-undef */
import React, { useState } from 'react';
import '../../../../css/search_form.css';
import {connect, useSelector} from 'react-redux';
import *as actions from '../../../../store/action/DataFilm';

const SearchForm =(props)=>{
  const [movieName, setmovieName] = useState('');
  const [category, setcategory] = useState('');
  const [year, setyear] = useState('');
  const film = useSelector(state =>{return state.dataFilm})

  const filter=()=>{
    let movieItem=film
    console.log(movieItem)
   if(movieItem){
          if(category!=="all"){
            movieItem=movieItem.filter(item=>item.category.toUpperCase().indexOf(category.toUpperCase())!==-1);
        }
        if(movieName){
          movieItem=movieItem.filter(item=>item.name.toUpperCase().indexOf(movieName.toUpperCase())!==-1);
        }
        if(year){
          movieItem=movieItem.filter(item=>item.year_of_production<=year);
        }
   return props.filter(movieItem);
   }
    
    return props.filter(film)//lấy tất cả
  }

  
  const nameHandleChange=(e)=>{
   setmovieName(e.target.value) 
  }
  const categoryHandleChange=(e)=>{
    setcategory(e.target.value) 
   }
   const yearHandleChange=(e)=>{
    setyear(e.target.value) 
   }
  const handleSubmit=(event)=>{
    event.preventDefault();
    filter()
    
   console.log(film);
  }
  
   
        return (
          <div className="searh-form">
            <h4 className="sb-title">Search for movie</h4>
            <form className="form-style-1" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12  form-it">
                  <label>Movie name</label>
                  <input 
                      type="text" 
                      placeholder="Enter keywords" 
                      name="movieName"
                      onChange={nameHandleChange}
                      />
                </div>
                <div className="col-md-12 form-it">
                  <label>Genres &amp; Subgenres</label>
                  <div className="group-ip">
                    <select 
                        className="browser-default custom-select se"
                        name="category"
                        onChange={categoryHandleChange}
                        >
                      <option selected>Open this select menu</option>
                      <option value="all">Tất cả</option>
                      <option value="Hoạt hình">Hoạt Hình</option>
                      <option value="Kinh Dị">Kinh Dị</option>
                      <option value="Tình cảm">Tình Cảm</option>
                      <option value="Hành Động">Hành Động</option>
                      <option value="Phiêu Lưu">Phiêu Lưu</option>
                      <option value="TÂM LÝ">Tâm Lý</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12 form-it">
                  <label>Rating Range</label>
                  <select className="se">
                    <option value="range">
                      -- Select the rating range below --
                    </option>
                    <option value="saab">
                      -- Select the rating range Up --
                    </option>
                  </select>
                </div>
                <div className="col-md-12 form-it">
                  <label>Release Year {year}</label>
                  <div className="row">
                   <div className="col-md-12">
                   <input type="range" name="year" min="2007" max="2020" value={year} onChange={yearHandleChange}  />
                   </div>
                  </div>
                </div>
                <div className="col-md-12 ">
                  <input
                    className="submit"
                    type="submit"
                   
                    
                  />
                </div>
              </div>
            </form>
          </div>
        );
    }



export default SearchForm;