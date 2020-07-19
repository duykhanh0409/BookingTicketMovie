import *as types from '../type/bookSeat';

//chưa dùng
export const  setSelectedSeat=()=>({
    type: types.LIST_SEAT
})

export const ADD_SEATRESERVED =(seat)=>{
    return {
        type:types.ADD_SEATRESERVED,
        seat
    }
}