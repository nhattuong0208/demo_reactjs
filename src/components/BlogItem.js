import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { blog } from './../firebase'
import * as firebase from 'firebase';
import ReadMore from './ReadMore';
class BlogItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tieude: '',
			noidung: '',
			hinhanh: ''
		};
	}


	handleDelete = (item) => {
		if (window.confirm("Bạn muốn xoá bài này ?")) {
			blog.child(item.key).remove();
		}
	}
	handleChange = (event) => {
		this.setState({ tieude: event.target.value })
		this.setState({ noidung: document.getElementById("noidungblog").value })
		this.setState({ hinhanh: document.getElementById("hinhanhblog").value })

	}
	handleChange2 = (event) => {
		this.setState({ noidung: event.target.value })
		this.setState({ tieude: document.getElementById("tieudeblog").value })
		this.setState({ hinhanh: document.getElementById("hinhanhblog").value })
	}
	handleChange3 = (event) => {
		this.setState({ hinhanh: event.target.value })
		this.setState({ tieude: document.getElementById("tieudeblog").value })
		this.setState({ noidung: document.getElementById("noidungblog").value })
	}
	saveData = () => {

		let tieude = this.state.tieude;
		let noidung = this.state.noidung;
		let hinhanh = this.state.hinhanh;
		let email = this.props.item.email;
		let key = document.getElementById("keyblog").value;
		let kiemtra = document.getElementById("kiemtrablog").value;

		firebase.database().ref("blog/" + key).update({
			tieude: tieude,
			noidung: noidung,
			hinhanh: hinhanh,
			kiemtra: kiemtra,
			email: email
		})



	}
	updateData = (item) => {
		document.getElementById("tieudeblog").value = item.tieude;
		document.getElementById("noidungblog").value = item.noidung;
		document.getElementById("hinhanhblog").value = item.hinhanh;
		document.getElementById("keyblog").value = item.key; // lấy id key
		document.getElementById("kiemtrablog").value = item.kiemtra;
		// document.getElementById("timeblog").value = item.time;
	}


	theimage2 = () => {
		let filename = document.getElementById("file-idblog").files[0].name;
		let hinhanh = document.getElementById('hinhanhblog').value = "img/" + filename;
		this.setState({
			hinhanh: hinhanh
		});
		this.setState({ noidung: document.getElementById("noidungblog").value })
		this.setState({ tieude: document.getElementById("tieudeblog").value })
	}

	Anhien = () => {
		let item = { tieude: '', noidung: '', email: '', hinhanh: '', kiemtra: '' , thoigian:''};
		item = (this.props.item !== undefined) ? this.props.item : item;
		console.log(item);
		if (this.props.anhien == 0) {
			return (
				<div>
					<button type="button" onClick={() => this.handleDelete(item)}  class="btn btn-danger">Xóa</button>
					<button type="button" class="btn btn-info" onClick={() => this.updateData(item)} data-toggle="modal" data-target="#myModal">Sửa</button>
					<div class="modal" id="myModal">
						<div class="modal-dialog">
							<div class="modal-content">
								<form className="form-horizontal" >
									<div className="form-group">
										<input id="tieudeblog" style={{ background: 'black', color: "white" }} onChange={this.handleChange} value={this.state.tieude} name="tieude" type="text" className="form-control" placeholder="" />
									</div>
									<div className="form-group">
										<textarea id="noidungblog" style={{ background: 'black', color: "white" }} onChange={this.handleChange2} value={this.state.noidung} name="noidung" type="text" className="form-control" placeholder="" ></textarea>
									</div>
									<div className="form-group">
										<input onChange={this.theimage2} id="file-idblog" type="file" accept="video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv, image/*, image/heic, image/heif" />
										<input id="hinhanhblog" style={{ background: 'black', color: "white" }} onChange={this.handleChange3} value={this.state.hinhanh} name="hinhanh" type="text" className="form-control" placeholder="" />
									</div>

									<input type="hidden" id="keyblog" />
									<input type="hidden" id="kiemtrablog" />
									{/* <input type="hidden" id="timeblog" /> */}

									<div className="form-group">
										<div className="col-sm-offset-2 col-sm-6">
											<a onClick={() => this.saveData()} className="btn btn-success">Add</a>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)
		}
		return '';
	}




	render() {
		let item = { tieude: '', noidung: '', email: '', hinhanh: '', kiemtra: '', thoigian:'' };
		item = (this.props.item !== undefined) ? this.props.item : item;
		let index = this.props.index;
		let id = "#"+index;
console.log(item.thoigian);
		return (
			<div className="bg-faded p-4 my-4">
				<div className="card card-inverse">
					<img className="card-img img-fluid w-100" style={{ height: 500 + "px" }} src={item.hinhanh} alt="slide-1" />
					<div className="card-img-overlay bg-overlay">
						<h2 style={{"font-weight": "bold"}} className="card-title text-shadow text-white text-uppercase mb-0">{item.tieude}</h2>
						<p  className="text-primary">{item.email}</p>
						{/* <p  className="text-white">{item.thoigian}</p> */}
						<br/>
						<p className="gioihannd lead card-text text-shadow text-white w-50 d-none d-lg-block">{item.noidung}</p>
						{/* NÚT XÓA SỬA */}
						<div>
							{this.Anhien()}
						</div>
						{/* READ MORE */}
						<div>
							<div style={{ display: 'none' }} id={index}>
							<div className="carousel-item active">
								<img src={item.hinhanh} alt="Los Angeles" />
								{/* <div className="overplay" /> */}
									<div className="carousel__caption">
										<h4>{item.email}</h4>
										<p  className="text-white">{item.thoigian}</p>
										<h1 className="display-4">{item.tieude}</h1>	
									</div>
								</div>
								<p>{item.noidung}</p>
							</div>
							<button data-fancybox data-src={id} href="javascript:;" type="button" class="btn btn-outline-secondary">Xen Thêm</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BlogItem;
