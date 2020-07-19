import React from 'react';
import HeaderRight from './HeaderRight';
import MovieList from './Movie_List/Movie_list';
class ContentRight extends React.Component{
    render(){
        return(
            <div className="col-md-8 col-sm-12 col-xs-12">
                <HeaderRight />
                <MovieList 
                   data={this.props.data} 
                   dataName={this.props.dataName} 

                 />
            </div>        
        )
    }
}

export default ContentRight;