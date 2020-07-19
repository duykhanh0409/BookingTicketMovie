/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import ReservedList from "../booking_Seat/ReservedList";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "../style/checkbook.css";
import * as actions from "../../../store/action/schedule";
import { connect } from "react-redux";
//import { set } from "immer/dist/internal";

const CheckBook = (props) => {
  const [combo1, setCombo1] = useState(0);
  const [combo2, setCombo2] = useState(0);

  const bookSeat = useSelector((state) => state.bookSeat);
  const timeBook = useSelector((state) => state.schedule);
  const dataBooking = useSelector((state) => state.dataBooking);
  const dataTicket=useSelector(state=>state.schedule) // chưa giá trị ngày đặt và rạp chiếu truyền từ store

  console.log(dataTicket,"thành công");
  const onHandleChangeCombo1 = (event) => {
    console.log(event.target.value);
    setCombo1(event.target.value);
  };
  const onHandleChangeCombo2 = (event) => {
    setCombo2(event.target.value);
  };

  // console.log(this.props.bookSeat.seatReserved);
  console.log(dataBooking[0], "chu yeu ne");
  //console.log(props.date, "ngay chieu ne de dung luc post data");
  console.log(timeBook.time, "gio chieu");
  const { seatReserved } = bookSeat;

  const name = dataBooking[0] && dataBooking[0].name;
  const id=dataBooking[0]&&dataBooking[0].id;
  const image = dataBooking[0] && dataBooking[0].image[0];
  console.log(name);
  let tong = seatReserved.length * 75000 + combo1 * 60000 + combo2 * 80000;

  const data = {
    name: name,
    time: timeBook.time,
    date: props.date,
    TongTien: tong.toString(),
    cinema: props.cinema,
    Seats: seatReserved.length.toString(),
  };

  console.log(typeof(tong),typeof(seatReserved.length),"xem kiểu dữ liệu");
  const handlePost = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://ciname-nodejs-backend.herokuapp.com/booking/postData", {
        id:id,
        name: name,
        time: timeBook.time,
        date: dataTicket.scheduleTime,
        TongTien: tong,
        cinema:dataTicket.cinema,
        Seats: seatReserved.length,
        client:"khanh"
      })
      .then((Response) => console.log(Response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handlePost}>
      <div className="border-warp">
        <div className="warp-content" style={{ padding: "10px" }}>
          <div className="warp-content-head">
            <div className="head-left">
              <img
                src={`http://ciname-nodejs-backend.herokuapp.com/movie/picture/${image}`}
                height="150px"
              />
            </div>
            <div className="head-right">
              <p>{name}</p>
              <p>Xuất: {timeBook.time}</p>
              <p>giá vé: 75.000đ/vé</p>
            </div>
          </div>

          <div className="wrap-content-middle">
            <h5>ComBo & Khuyến Mãi</h5>
            <div className="combo">
              <table class="table">
                <thead>
                  <tr>
                    <th>Combo</th>
                    <th>Đơn Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={require("../../../images/uploads/combo.jpg")}
                        height="50px"
                      />
                    </td>
                    <td>60.000Đ</td>
                    <td>
                      <input
                        type="number"
                        id="quantity"
                        name="combo1"
                        min={1}
                        max={5}
                        onChange={onHandleChangeCombo1}
                      />
                    </td>

                    <td>{combo1 * 60000}$</td>
                  </tr>

                  <tr>
                    <td>
                      <img
                        src={require("../../../images/uploads/combo.jpg")}
                        height="50px"
                      />
                    </td>
                    <td>80.000Đ</td>
                    <td>
                      <input
                        type="number"
                        id="quantity"
                        name="combo2"
                        min={1}
                        max={5}
                        onChange={onHandleChangeCombo2}
                      />
                    </td>
                    <td>{combo2 * 80000}$</td>
                  </tr>

                  <tr>
                    <td>Ticket 2D</td>
                    <td>75.000Đ</td>
                    <td>
                      <p>{seatReserved.length}</p>
                    </td>
                    <td>{seatReserved.length * 75000}$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="checkSeat">
            <h5>Ghế Đã Chọn</h5>
            <div className="wrap-checkSeat">
              <ReservedList reserved={seatReserved} />
            </div>
          </div>

          <div className="Bill">
            <h6>Tổng Cộng</h6>
            <label>{tong} VND</label>
          </div>
          <button
            className="btn btn-outline-primary"
            style={{ width: "100%" }}
            onClick={handlePost}
          >
            Thanh Toán
          </button>
        </div>
      </div>
    </form>
  );
};

// const mapStateToProps=(state)=>{
//   return{
//       bookSeat:state.bookSeat,
//       time:state.schedule,
//       dataBooking:state.dataBooking
//   }
// }

export default CheckBook;
