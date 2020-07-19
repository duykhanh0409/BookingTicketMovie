import *as types from '../type/IsLogin';

const initialState={ 
    auth:false,
    name:'',
    picture:''
}

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.IS_LOGIN_FACEBOOK:
            return state;
        case types.iS_CHANGE_LOGIN_FACEBOOK_INFOR:
            //console.log(action);
            state.auth=true;
            state.name=action.payload.name;
            state.picture=action.payload.picture.data.url;
            //console.log(state);    
            return state;    
         default: return state;   
    }
}

export default myReducer;