import React from 'react';
import '../style/Select_cinema.css';

class Select_Calendar extends React.Component{
    render(){
        return(
            <div className="calendar">
                {/* <input type="datetime-local" id="meeting-time" name="meeting-time" 
                defaultValue="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00" /> */}
                <input type="date" id="myDate" defaultValue="2014-02-09" />

            </div>
        )
    }
}

export default Select_Calendar;