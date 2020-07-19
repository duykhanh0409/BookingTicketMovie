import *as types from '../type/dataBooking';

export const GetDataBooking=(movie)=>{
    return {
        type:types.GETDATABOOKING,
        payload:movie
    }
}
export const dataBooking=()=>{
    return {
        type:types.DATABOOKING
    }
}