import { combineReducers } from 'redux'
import bookSeat from './reducer/BookSeat';
import isLogin from './reducer/Login';
import loginUser from './reducer/LoginUser';
import dataFilm from './reducer/DataFilm';
import schedule from './reducer/schedule';
import dataBooking from './reducer/dataBooking';

const myReducer= combineReducers({
  bookSeat,
  isLogin,
  loginUser,
  dataFilm,
  schedule,
  dataBooking
});

export default myReducer;