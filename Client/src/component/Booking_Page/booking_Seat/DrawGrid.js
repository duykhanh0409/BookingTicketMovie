import React from 'react';
import ReservedList from './ReservedList';
import { connect } from 'react-redux'
import *as action from '../../../store/action/bookSeat';

class DrawGrid extends React.Component {
    render() {
     
      return (
         <div className="container-booking">
          <h2></h2>
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                      className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
          {/* <AvailableList available = { this.props.available } /> */}
          {/* <ReservedList reserved = { this.props.reserved } />  */}
         </div>
      )
    }
    
    onClickSeat(seat) {
       this.props.onClickData(seat);
      this.props.addReserved(seat);
     // console.log(this.props.onClickData(seat));
      
     // console.log(this.props.addReserved(seat)); // cái này bị undefined  nè anh
    }
  }
  const mapStateToProps=state=>{
    return{

    }
  }
  const mapDispatchToProps=(dispatch,props)=>{
    return{
        addReserved:(seat)=>{
          console.log("hello")
            dispatch(action.ADD_SEATRESERVED(seat))
        }
    }
}
  export default connect(mapStateToProps,mapDispatchToProps)(DrawGrid);