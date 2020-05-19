import React, { Component } from 'react'

export default class ReadMore extends Component {
    render() {
        let item = { tieude: '', noidung: '', email: '', hinhanh: '', kiemtra: ''};
		item = (this.props.item !== undefined) ? this.props.item : item;
        return (
            <div className="carousel-item active">
                <img src={item.hinhanh} alt="Los Angeles" />
                <div className="overplay" />
                <div className="carousel__caption">
                    <h4></h4>
                    <h1 className="display-4">End of the World: Part I</h1>
                </div>
                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
                    est notare quam littera gothica, quam nunc putamu.</p>
                    <div className="button">
                        <span>PG</span>
                        <button>
                            <i className="fa fa-play" />
                            PLAY TRAILER
                    </button>
                    </div>
            </div>

        )
    }
}
