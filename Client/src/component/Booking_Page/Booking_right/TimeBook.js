import React from 'react';

class TimeBook extends React.Component{
    render(){
        console.log(this.props.chosetime)
        return(
            <div>
                <h4>Giờ đã chọn:</h4>
                <ul>
                    {this.props.chosetime.map(time=>(
                        <li>{time}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TimeBook;