import React from 'react';
import SearchForm from './search_movie/SearchForm';
import '../../../css/search_form.css';

class ContentLeft extends React.Component{
    filter = (data) =>{
        this.props.filter(data)
    }
    render(){
        return(
            <div class="col-md-4 col-sm-12 col-xs-12">
                <div class="sidebar">
                    <SearchForm 
                    filter={this.filter} 
                    
                    />
                </div>
            </div>
				
        )
    }
}

export default ContentLeft;