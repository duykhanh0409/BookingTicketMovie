import *as types from '../type/IsLogin';

export const isLogin=()=>{
    return{
        type:types.IS_LOGIN_FACEBOOK
    }
}

export const onChangeLoginFaInfor=(infor)=>{
    return{
        type:types.iS_CHANGE_LOGIN_FACEBOOK_INFOR,
        payload:infor
    }
}

export const LoginUser=()=>{
    return{
        type:types.IS_LOGIN_USER
    }
}

export const onChangeLoginUserInfor=(infor)=>{
    return{
        type:types.ON_CHANGE_LOGIN_USER_INFOR,
        payload:infor
    }
}

