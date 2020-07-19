/* eslint-disable react/jsx-pascal-case */
import React from 'react';

import Select_Cinema from './Select_Cinema';
import Select_Calendar from './Select_Calendar';
import WatchTime from './WatchTime';

class Booking_right extends React.Component{
    render(){
        return(
            <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12" >
                <div className="check-right" style={{paddingLeft:"130px"}}>
                    
                    <WatchTime/>
               </div>
            </div>
        )
    }
}

export default Booking_right;