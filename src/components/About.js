import React, { Component } from 'react'
import user from '../reducers/user';

export default class About extends Component {
    render() {
        let user = this.props.user.info; // nhận từ AboutPage
        console.log(user);
        return (
            <div style={{"margin-left":"245px"}} class="d-flex align-items-center">
            <div  className="card " style={{ width: 600 }}>
                <img className="card-img-top" src={user.img} alt="Card image" />
                
                <div className="card-body">
                    <h4 className="card-title">{user.name}</h4>
                    <p className="card-text">{user.email}</p>
                    {/* <a href="#" className="btn btn-primary">{user.uid}</a> */}
                </div>
            </div>
            </div>
        )
    }
}
