import * as types from "../type/dataBooking";

const initialState = [];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETDATABOOKING:
      console.log(action);
      return action.payload;
    case types.DATABOOKING:
      return state;
    default:
      return state;
  }
};

export default myReducer;
