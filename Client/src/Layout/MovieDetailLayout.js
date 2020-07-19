import React from 'react';
import {connect} from 'react-redux';
import *as actions from '../store/action/schedule';
import Header from '../component/header/Header';
import Footer from '../component/Footer/Footer';
import MovieDetail from '../component/Product_detail/index';
import axios from 'axios';

class MovieDetailPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movieItem:[]
            
        }
    }
    componentDidMount(){
          axios.get(` http://ciname-nodejs-backend.herokuapp.com/movie/data/${this.props.match.params.id}`)
          .then(Response=>{
            const movieItem=Response.data;
            this.setState({movieItem})
            this.props.getId(this.props.match.params.id);
          })
          .catch(err=>console.log(err))           
        }
    render(){
      //console.log(this.props.match.params.id,"hehe");

        return(
            <>
            <Header/>
            <MovieDetail movieItem={this.state.movieItem} id={this.props.match.params.id}/>
            <Footer/>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{

    }
}

const mapDispatchtoProp=(dispatch)=>{
    return{
        getId:(id)=>{
            dispatch(actions.id_movie(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchtoProp)(MovieDetailPage);