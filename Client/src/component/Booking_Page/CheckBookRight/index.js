import React from 'react'
import CheckBook from './CheckBook';

class Check extends React.Component{
    render(){
        return(
            <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12" >
                <div className="book-right" style={{paddingLeft:"130px"}}>
                    <CheckBook
                        data={this.props.data}
                       
                    />
               </div>
            </div>
        )
    }
}

export default Check;