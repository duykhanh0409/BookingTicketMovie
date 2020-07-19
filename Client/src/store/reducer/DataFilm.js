import *as types from '../type/DataFilm';
import { produce } from 'immer';

const initialState=[];

// const fillerMovie=(state,movie)=>{
//     let New=[];
//     const 
// }

var myReducer=(state=initialState,action)=>{
    
  switch(action.type){
      case types.GET_USER_REQUEST:
          return state;
       case types.GET_DATA_SUCCESS:
           state=action.payload;
           console.log(state,"data ben redux ne")
           return state;
       case types.GET_DATA_ERROR:
           state=action.payload;
           return state;
       case types.FILLTER_DATA:
           console.log(action);//hiểu rồi. lần thứ nhất state bị gán lại chỉ còn bằng các phần tử của lần đầu tiên
           console.log(state);
          
          if(action.payload.category!=="all"){
            let movieList=[].concat(state);
            console.log(movieList);// ở đây mảng bị gán lại còn = 4 nên lọc không ra nửa
             const movieListItem=movieList.filter(movie=>movie.category.toUpperCase()===action.payload.category.toUpperCase());
             const MovieFiller=[].concat(movieListItem);
             console.log(MovieFiller);
            return [...MovieFiller];    
       

          }
          return state
          
         
        default: return state;         
  }
}

export default myReducer