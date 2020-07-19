import *as types from '../type/IsLogin';

const initialState={ 
    authUser:false, //dung de xac minh xem tai khoan da login chua
    email:'',
    password:''
}

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.IS_LOGIN_USER:
            return state;
        case types.ON_CHANGE_LOGIN_USER_INFOR:
            console.log(action);   
            state.authUser=true;
            state.email=action.payload.email;
            state.password=action.payload.password;
            console.log(state);
            return state; 
        default: return state;    
    }
    
}

export default myReducer;