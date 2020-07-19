/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-useless-constructor */
import React, { useEffect, useState } from "react";
import Select_Calendar from "../../Booking_Page/Booking_right/Select_Calendar";
import Select_Cinemar from "../../Booking_Page/Booking_right/Select_Cinema";
import "../../Booking_Page/style/Select_cinema.css";
import "./style.css";

import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch} from 'react-redux';
import *as actions from '../../../store/action/schedule';

const Choose_Cinema = (props) => {
  const [schedule, setSchedule] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("ok");
    getDataSchedule();
    
  }, []);

  const getDataSchedule = () => {//dung chi de cho ben kia lay id thoi
    console.log("fetching");
    axios
      .get(`http://ciname-nodejs-backend.herokuapp.com/schedule/data`)
      .then((Response) => {
        const schedule = Response.data;
        console.log("fetchdata", schedule);
        setSchedule(schedule);
        dispatch(actions.schedule_movie(schedule))
      })
      .catch((err) => console.log(err));
  };


  
  return (
   <Select_Cinemar id={props.id} />
  );
};

export default Choose_Cinema;
