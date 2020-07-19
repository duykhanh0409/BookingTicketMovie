import React from 'react';
import Header from '../component/header/Header';
import Footer from '../component/Footer/Footer';
import '../css/Product_detail_left.css';

const Profile =()=>{
    return (
      <>
        <Header />
        <div className="hero mv-single-hero" style={{ height: "300px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
        </div>

        <div style={{ height: "600px",background:'#212529',color:'white' }}>
          <div className="container" style={{paddingTop:'80px'}} >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">STT </th>
                  <th scope="col">Rap</th>
                  <th scope="col">Thời Gian Đặt</th>
                  <th scope="col">Xuất Chiếu</th>
                  <th scope="col">Tên Phim</th>
                  <th scope="col">Số Ghế</th>
                  <th scope="col">Tổng Tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Profile;