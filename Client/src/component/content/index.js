import React, { useEffect, useState } from "react";
import ContentRight from "./content-right/index";
import ContentLeft from "./content-left/index";
import "../../css/content_sort.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { getData } from "../../store/action/DataFilm";
const Content = (props) => {
  const [listFilm, setlistFilm] = useState([]); //get list film tu redux vao day
  const [nameFilm, setnameFilm] = useState([]);
  const film = useSelector((state) => {
    return state.dataFilm;
  }); // lấy state từ store un, thấy thế mapStatetoprop
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData()); // dispatch kiểu mới của hook phiên bản mới như componentdidmount
    return () => {};
  }, []);
  useEffect(() => {
    setlistFilm(film); // set lại danh sách phim
    setnameFilm(film); //cho name
    return () => {};
  }, [film]);
  const changeDisplayFilm = (filmAfterChange) => {
    setlistFilm(filmAfterChange); // danh sách phim sao khi lọc
  };

  return (
    <div className="page-single">
      <div className="container">
        <div className="row ipad-width">
          <ContentRight data={listFilm} />
          <ContentLeft filter={changeDisplayFilm} />
        </div>
      </div>
    </div>
  );
};

export default Content;
