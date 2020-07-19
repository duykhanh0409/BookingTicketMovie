/* eslint-disable no-useless-constructor */
import React from 'react';
import TimeBook from './TimeBook';
import '../style/Select_cinema.css';
//cái component này để đem qua bên kia sài
class WatchTime extends React.Component{
    constructor(props){
        super(props);
            this.state={
                time:['1:30','2:30','3:30','4:40','5:50'],
                timeAvailable:['1:30','2:30','3:30','4:40','5:50'],
                chosetime:[]

            }
            this.onClickData=this.onClickData.bind(this);
    }
    onClickData(time){
        if(this.state.chosetime.indexOf(time)>-1){
            this.setState({
                timeAvailable:this.state.timeAvailable.concat(time),
                chosetime:this.state.chosetime.filter(res=> res!==time)
            })
        }else{//nó sẻ chạy cái else
            this.setState({
                chosetime:this.state.chosetime.concat(time),
                timeAvailable:this.state.timeAvailable.filter(res=> res!==time)
            })
        }
    }
    
    render(){
        //render ra lich thoi gian chieu 
        //console.log(this.state.chosetime);
        const {chosetime}=this.state;
        return(
            <div className="timeWatch">
            <h3>Lịch Chiếu Trong Ngày</h3>
                <ul>
                    {this.state.time.map(time=>(
                        <li  className={chosetime.indexOf(time) > -1? 'reserved': ''} 
                        key={time} onClick={e=>this.onClickData(time)}>{time}</li>
                        
                    ))}
                </ul>
            <TimeBook chosetime={this.state.chosetime} />
            </div>
        )
    }
}

export default WatchTime;