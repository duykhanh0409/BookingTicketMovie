import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/Footer/Footer";
import BookingLayout from "../component/Booking_Page/index";
import * as actions from "../store/action/dataBooking";
import axios from "axios";

const BookingPage = (props) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    GetData();
  }, []);
  //console.log(props.location.state.nameCinema, "rap nao chieu");
  //console.log(props.location.state.scheduleTime, "rap nao chieu");
  let { id } = useParams();
  const GetData = () => {
    axios
      .get(`http://ciname-nodejs-backend.herokuapp.com/movie/data/${id}`)
      .then((Response) => {
        const data = Response.data;
        setData(data);
        console.log("this is data",data);
        dispatch(actions.GetDataBooking(data));
      })
      .catch((err) => console.log(err));
  };

  console.log(id);

  return (
    <>
      <Header />
      <BookingLayout
        data={data}
        // date={props.location.state.scheduleTime}
        // cinema={props.location.state.nameCinema}
      />
      <Footer />
    </>
  );
};

export default BookingPage;
