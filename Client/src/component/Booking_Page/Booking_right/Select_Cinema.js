import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../store/action/schedule";
import "../style/Select_cinema.css";
// vấn đề. nếu chọn ngày khác thì bị lỗi, sửa lỗi đó thì củng sẻ change đc mà không còn button
const Select_Cinema = (props) => {
  console.log(props.id, "nef");

  const [scheduleTime, setScheduleTime] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [listNameCinema, setListNameCinema] = useState([]); // chứa list name cinema
  const [nameCinema, setNameCinema] = useState(""); // lấy giá trị nhấp vào select
  const [timeWatch, setTimeWatch] = useState([]);
  const [timeClick, setTimeClick] = useState("");
  const dispatch = useDispatch();
  // console.log(id_movie,"xem nos la gi");
  useEffect(() => {
    getDataSchedule();
  }, []);

  useEffect(() => {
     //handleClickTime();
    console.log(timeClick, "có chưa");
  }, [timeClick]);

  useEffect(() => {
    // để đây để đồng bộ dữ liệu
    filterListTime();
  }, [nameCinema]); // biến thay đổi thì gọi hàm
  //getdata
  const getDataSchedule = () => {
    console.log("fetching");
    axios
      .get(
        `http://ciname-nodejs-backend.herokuapp.com/schedule/data/${props.id}`
      )
      .then((Response) => {
        const schedule = Response.data;
        console.log("fetchdata", schedule);
        setSchedule(schedule);
        // dispatch(actions.schedule_movie(schedule));
      })
      .catch((err) => console.log(err));
  };

  const filterCinema = () => {
    let setTime = schedule[0].schedule_time;
    console.log(setTime[0].date); // lấy ngày ra coi thử
    if (setTime) {
      if (scheduleTime) {
        setTime = setTime.filter((item) => item.date === scheduleTime);
        console.log(setTime);
        //return setListNameCinema(setTime[0].ds_cinema);
      }
      // return setListNameCinema(setTime[0].ds_cinema);
    }

    return setListNameCinema(setTime[0].ds_cinema);
  };

  //change input date
  const handleChangeGTime = (e) => {
    setScheduleTime(e.target.value);
  };
  //change select
  const handleChangeNameCinema = (e) => {
    setNameCinema(e.target.value);
    filterListTime();
  };
  const handleSubmit = (event) => {
    // đang muốn không submit nhưng nó củng tự change
    event.preventDefault();
    filterCinema(); // lộc theo ngày để lấy ra danh sách đối tượng của ngày được chọn
    // filterListTime(); //lọc giờ chiếu theo rạp
  };

  // lộc ra time
  let filterListTime = () => {
    let listTime = listNameCinema.filter((item) => item.name === nameCinema);
    console.log(listTime, "no có gọi hàm này không");

    return setTimeWatch(listTime);
  };

  console.log(listNameCinema);
  let Cinema = listNameCinema.map((item) => (
    <option value={item.name} style={{ background: "#020d18" }}>
      {item.name}
    </option>
  ));

  console.log(nameCinema);

  const handleClickTime = (e) => {
    console.log(e.target.innerText);
    var a = e.target.innerText;
    dispatch(actions.passTimeToBooking(a));
    setTimeClick(a);//sẻ mất giá trị khi đưa vào Link to
    dispatch(actions.getDateBook(scheduleTime)); //lấy ngày đưa lên store để truyền qua booking
    dispatch(actions.getCinema(nameCinema)); //name tương tự
  };
  console.log(timeClick, "chứa gì");

  //listtime
  let listTime = timeWatch.map((item) =>
    item.showtime.map((item) => (
      <Link
        to={{
          pathname: `/booking/${schedule[0].id}`,
          state:'',
        }}
      >
        <li onClick={handleClickTime} value={item} name={item}>
          {item}
        </li>
      </Link>
    ))
  );

  //list cinema option
  var listCinemaOption = timeWatch.map((item) => (
    <div className="warp-item">
      <div className="warp-title">
        <h6>{item.name}</h6>
      </div>
      <div className="warp-list">
        <p>2D-phụ đề</p>
        <div className="wrap-list-item">
          <ul>{listTime}</ul>
        </div>
      </div>
    </div>
  ));

  //list all cinema
  var listcinema = listNameCinema.map((item) => (
    <div className="warp-item">
      <div className="warp-title">
        <h6>{item.name}</h6>
      </div>
      <div className="warp-list">
        <p>2D-phụ đề</p>
        <div className="wrap-list-item">
          <ul>
            {item.showtime.map((items) => (
              <Link
                to={{
                  pathname: `/booking/${schedule[0].id}`,
                  state: { scheduleTime: scheduleTime, nameCinema: nameCinema },
                }}
              >
                <li onClick={handleClickTime} value={items} name={items}>
                  {items}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div>
        {schedule.length ? (
          <div className="warp">
            <div>
              <h4>Lịch Chiếu</h4>
              <p
                style={{
                  height: "1px",
                  width: "100px",
                  backgroundColor: "red",
                }}
              ></p>
            </div>
            <div className="filter-content">
              <form onSubmit={handleSubmit} style={{ display: "flex" }}>
                <div className="calendar">
                  <input
                    type="date"
                    id="myDate"
                    defaultValue="2020-05-10"
                    onChange={handleChangeGTime}
                  />
                </div>
                <select name="list_cinema" onChange={handleChangeNameCinema}>
                  <option value="All" style={{ background: "#020d18" }}>
                    All
                  </option>
                  {Cinema}
                </select>
                <input className="submit" type="submit" />
              </form>
            </div>
            <div className="warp-content">
              {/*show all cinema or select cinema*/}
              {nameCinema === "All" ? listcinema : listCinemaOption}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Select_Cinema;
