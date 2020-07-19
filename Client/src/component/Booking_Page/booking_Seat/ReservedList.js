import React from 'react';
import './booking_seat.css';
class ReservedList extends React.Component {
    render() {
        
      return (
        <div className="right">
         {/* <div className="name-movie mov">
              <h4>Name</h4>
              <p>Geogre semon</p>
          </div> */}
          <div className="ticket mov">
            {/* <h4>Tickets: {this.props.reserved.length} </h4> */}
            <div className="seated">
              {this.props.reserved.map((res) => (
                <li key={res}>{res}</li>
              ))}
            </div>
          </div>
          {/* <div className="price-movie mov">
                <h4>Price</h4>
              <p>{this.props.reserved.length*10} $</p>
          </div> */}
        </div>
      );
    }
  }

  export default ReservedList;