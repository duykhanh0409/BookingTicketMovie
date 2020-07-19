/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Booking_Seat from './booking_Seat/booking_Seat';
import Booking_right from './CheckBookRight/index';
import './style/index.css';


class Booking_Page extends React.Component{
    render(){
        return(
            <>
            <div className="hero mv-single-hero-2">
              <div className="container">
                <div className="row">
                  <div className="col-md-12"></div>
                </div>
              </div>
            </div>

            <div className="body-booking">
                <div className="container">
                    <div className="row">
                        <Booking_Seat  />
                        <Booking_right 
                            data={this.props.data}
                             
                            />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Booking_Page;