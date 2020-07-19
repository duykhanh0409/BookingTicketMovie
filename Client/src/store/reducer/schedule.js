import *as types from '../type/schedule';

const initialState={
    schedule:[],
    id:"",
    time:'',
    scheduleTime:'',
    cinema:''
}

var myReducer=(state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case types.SCHEDULE_MOVIE:
            console.log(action);
            //console.log(state);
            return state.schedule=action.payload;
        case types.GET_ID:
            //console.log(action)
            return state.id   
        case types.PASSTIMETOBOOKING:
             console.log(action);
             state.time=action.payload
            return state; 
        case types.GETDATEBOOK:
            state.scheduleTime=action.payload
            return state;
        case types.GETCINEMA:
            state.cinema=action.payload
            return state;        
        default: return state;    
    }
}
export default myReducer;