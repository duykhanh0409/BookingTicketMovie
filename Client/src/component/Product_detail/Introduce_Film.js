import React from 'react'

class Introduct_Film extends React.Component{
    render(){
        const category=this.props.movieItem[0]&&this.props.movieItem[0].category;
      const description=this.props.movieItem[0]&&this.props.movieItem[0].description;
      const director=this.props.movieItem[0]&&this.props.movieItem[0].director;
      const duration=this.props.movieItem[0]&&this.props.movieItem[0].duration;
      const language=this.props.movieItem[0]&&this.props.movieItem[0].language;
      const premiere_date=this.props.movieItem[0]&&this.props.movieItem[0].premiere_date;
        return (
          <>
            <div className="introduce">
              <div className="introduce-list">
                <ul>
                    <li>
                        <label>Đạo Diễn:</label>
                        <span>{director}</span>
                    </li>
                    <li>
                        <label>Diễn Viên:</label>
                        <span>ROBERT DOWNEY JR,  CHRIS EVANS,  SCARLETT JOHANSSON, CHRIS HEMSWORTH</span>
                    </li>
                    <li>
                        <label>Thể Loại:</label>
                        <span>{category}</span>
                    </li>
                    <li>
                        <label>Khởi Chiếu:</label>
                        <span>{premiere_date}</span>
                    </li>
                    <li>
                        <label>Thời Lượng:</label>
                        <span>{duration}</span>
                    </li>
                    <li>
                        <label>Ngôn Ngữ:</label>
                        <span>{language}</span>
                    </li>
                </ul>
              </div>
            </div>
            <div className="introduce-content">
                <label>Chi Tiết </label>
                <p>{description}
            .</p>
            </div>
          </>
        );
    }
}

export default Introduct_Film;