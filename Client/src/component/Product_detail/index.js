/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-expressions */
import React from 'react'
import ProductDetailLeft from './Product_detail_left';
import ProductDetailRight from './Product_detail_right';
import Wrap_choseCinema from './book_cinema/index';
import '../../css/Product_detail_left.css';


class ProductDetail extends React.Component{
  constructor(props){
    super(props);
    
    this.state=({
      isShowTimeFilm:false,
     
    })
  }

  onShowTimeFilm=()=>{
    this.setState({
      isShowTimeFilm:!this.state.isShowTimeFilm
    })
    console.log("hello",this.state.isShowTimeFilm);
  }
  
    // componentDidMount(){
    //   axios.get(`https://ciname-nodejs-backend.herokuapp.com/data/movie/${this.props.match.params.name}`)
    //   .then(Response=>{
    //     const movieItem=Response.data;
    //     this.setState({movieItem})
    //   })
    //   .catch(err=>console.log(err))

        
    // }
    render(){
      
        return (
          <>{/*thẻ div trên đây để css tạo height cho header */}
            <div className="hero mv-single-hero" >
              <div className="container">
                <div className="row">
                  <div className="col-md-12"></div>
                </div>
              </div>
            </div>

            <div className="page-single movie-single movie_single">
              <div className="container">
                <div className="row ipad-width2">
                  <ProductDetailLeft onShowTimeFilm={this.onShowTimeFilm} movieItem={this.props.movieItem} id={this.props.id} />
                  <ProductDetailRight movieItem={this.props.movieItem} />
                  {this.state.isShowTimeFilm ? <Wrap_choseCinema id={this.props.id}/> :''}
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default ProductDetail;