/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-constructor */
import React from 'react';
import './booking_seat.css';
import DrawGrid from './DrawGrid';
import { connect } from 'react-redux'


class Booking_seat extends React.Component{
    constructor(props){
        super(props);
    }

    onClickData(seat){
        if(this.props.bookSeat.seatReserved.indexOf(seat)>-1){     

            this.props.bookSeat.seatAvailable=this.props.bookSeat.seatAvailable.concat(seat);
            this.props.bookSeat.seatReserved=this.props.bookSeat.seatReserved.filter(res=> res!==seat)
        
        }else{
            
            this.props.bookSeat.seatReserved=this.props.bookSeat.seatReserved.concat(seat),
            this.props.bookSeat.seatAvailable=this.props.bookSeat.seatAvailable.filter(res=>res!==seat)
           
        }
    }


    render() {
       
       //nó chưa dispatch action lên store nên render lại mới đc
      // console.log(this.props.bookSeat.seatReserved);
        return (
          <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12">
            
            
            <div>
              <DrawGrid
                seat={this.props.bookSeat.seat}
                available={this.props.bookSeat.seatAvailable}
                reserved={this.props.bookSeat.seatReserved}
                onClickData={this.onClickData.bind(this)}
            
              />
            </div>
          </div>
        );
      }
}
  
const mapStateToProps=(state)=>{
    return{
        bookSeat:state.bookSeat
    }
}

// const mapDispatchToProps=(dispatch,props)=>{
//     return{
//         addReserved:(seat)=>{
//             dispatch(action.ADD_SEATRESERVED(seat))
//         }
//     }
// }

export default connect(mapStateToProps,null)(Booking_seat);