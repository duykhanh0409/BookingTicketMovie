/* eslint-disable no-unused-expressions */
import *as types from '../type/bookSeat';

const initialState={
    seat:[
        'A1','A2','A3','A4','A5','A6','A7','A8','A9','A10',
        'B1','B2','B3','B4','B5','B6','B7','B8','B9','B10',
        'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10',
        'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10',
        'E1','E2','E3','E4','E5','E6','E7','E8','E9','E10',
        'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10',
        'G1','G2','G3','G4','G5','G6','G7','G8','G9','G10',
        'H1','H2','H3','H4','H5','H6','H7','H8','H9','H10',
        
                 
    ],
    seatAvailable:[
        'A1','A2','A3','A4','A5','A6','A7','A8','A9','A10',
        'B1','B2','B3','B4','B5','B6','B7','B8','B9','B10',
        'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10',
        'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10',
        'E1','E2','E3','E4','E5','E6','E7','E8','E9','E10',
        'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10',
        'G1','G2','G3','G4','G5','G6','G7','G8','G9','G10',
        'H1','H2','H3','H4','H5','H6','H7','H8','H9','H10',
        
            
    ],
    seatReserved:[]
}

const onClickData=(seat)=>{
    if(initialState.seatReserved.indexOf(seat)>-1){     

        initialState.seatAvailable=initialState.seatAvailable.concat(seat);
        initialState.seatReserved=initialState.seatReserved.filter(res=> res!==seat)
    
    }else{
        
        initialState.seatReserved=initialState.seatReserved.concat(seat);
        initialState.seatAvailable=initialState.seatAvailable.filter(res=>res!==seat)
       
    }
    console.log(initialState);
    return {...initialState};
   // console.log(initialState.seatReserved);
}

var myReducer=(state=initialState,action)=>{
   // console.log(action,"ne ne")
    switch(action.type){
        case types.LIST_SEAT:
            return state;
        case types.ADD_SEATRESERVED:
            console.log(action)//ở đây
            
            return onClickData(action.seat);  
        default:return state;    
    }
    // eslint-disable-next-line no-unreachable
    
   
}

export default myReducer;