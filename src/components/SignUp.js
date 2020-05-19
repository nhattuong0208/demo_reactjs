import React, { Component } from 'react'
import { firebaseApp } from './../firebase'
import { users } from './../firebase'
import {Redirect} from 'react-router-dom';
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            img:''
        };
    }
    handleChange = (event) => {
		const target = event.target;    // input selectbox
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

    // dùng để đăng ký
    handleSubmit = (event) => {
        let { email, password, name, img } = this.state;
        firebaseApp.auth()
            .createUserWithEmailAndPassword(email, password)
            // sau khi dang ky thanh cong, them một user vào bảng users
            .then(data =>{
                users.child(data.user.uid).set({
                    id: data.user.uid,
                    email: email,
                    name: name,
                    img: img
                })
                
                alert("Đăng ký thành công");  
            })
            // neu lỗi
            .catch((error) => {
                alert(error);
            })

            users.push({
                email:email,
                img:img,
                name:name
            })
        event.preventDefault();
    }

    
    theimage3 = () =>{
        let filename = document.getElementById("file-singup").files[0].name;
        let img = document.getElementById('img-singup').value = "img/"+filename;
        this.setState({
            img: img
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-warning" data-toggle="modal" data-target="#myModal">Singup</button>
                <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                                    <div className="col-sm-6">
                                        <input value={this.state.email} onChange={this.handleChange} name="email" type="text" className="form-control" id="inputEmail3" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                                    <div className="col-sm-6">
                                        <input value={this.state.password} onChange={this.handleChange} name="password" type="text" className="form-control" id="inputPassword3" placeholder="Password" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">name</label>
                                    <div className="col-sm-6">
                                        <input value={this.state.name} onChange={this.handleChange} name="name" type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                                    </div>
                                </div>
                                <input id="file-singup" onChange={this.theimage3} type="file" accept="video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv, image/*, image/heic, image/heif"/>
                                <input id="img-singup" style={{ background: 'black', color: "white" }} onChange={this.handleChange} name="img"  className="form-control" placeholder="hình ảnh" ></input>

                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-6">
                                        <button type="submit" className="btn btn-success">Sign up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
