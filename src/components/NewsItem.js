import React, { Component } from 'react';
import { blog } from './../firebase'
import * as firebase from 'firebase';
class NewsItem extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tieude: '',
			noidung: ''
		};
	}

	handleDelete = (item) => {
		if (window.confirm("Bạn muốn xoá bài này ?")) { 
			blog.child(item.key).remove();
		  }
	}
	handleChange = (event) => {
		this.setState({ tieude: event.target.value })
		this.setState({ noidung: document.getElementById("noidungitem").value })
	}
	handleChange2 = (event) => {
		this.setState({ noidung: event.target.value })
		this.setState({ tieude: document.getElementById("tieudeitem").value })
	}
	saveData = () => {
		let tieude = this.state.tieude;
		let noidung = this.state.noidung;
		let email = this.props.item.email;
		let key = document.getElementById("keyitem").value;
		let kiemtra = document.getElementById("kiemtraitem").value;

		firebase.database().ref("blog/" + key).update({
			tieude: tieude,
			noidung: noidung,
			kiemtra: kiemtra,
			email: email
		})
	}
	updateData = (item) => {
		document.getElementById("tieudeitem").value = item.tieude;
		document.getElementById("noidungitem").value = item.noidung;
		document.getElementById("keyitem").value = item.key; // lấy id key
		document.getElementById("kiemtraitem").value = item.kiemtra;

	}

	Anhien = () => {

		let item = { tieude: '', noidung: '', email: '', kiemtra: ''};
		item = (this.props.item !== undefined) ? this.props.item : item;
		if (this.props.anhien == 0) {
			return (
				<div>
				<button type="button" onClick={() => this.handleDelete(item)} class="btn btn-outline-danger">Xóa</button>
				<button class="btn btn-outline-info" onClick={() => this.updateData(item)} data-toggle="modal" data-target="#myModal2">Sửa</button>
				<div class="modal" id="myModal2">
					<div class="modal-dialog">
						<div class="modal-content">
							<form className="form-horizontal" >
								<div className="form-group">
									<input id="tieudeitem" style={{ background: 'black', color: "white" }} onChange={this.handleChange} value={this.state.tieude} name="tieude" type="text" className="form-control" placeholder="" />
								</div>
								<div className="form-group">
									<textarea id="noidungitem" style={{ background: 'black', color: "white" }} onChange={this.handleChange2} value={this.state.noidung} name="noidung" type="text" className="form-control" placeholder="" ></textarea>
								</div>

								<input type="hidden" id="keyitem" />
								<input type="hidden" id="kiemtraitem" />

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
		let item = { tieude: '', noidung: '', email: '', kiemtra: '',thoigian:'' };
		item = (this.props.item !== undefined) ? this.props.item : item;

		return (
			<div className="bg-faded p-4 my-4">
				<hr className="divider" />
				<h2 className="text-center text-lg text-uppercase my-0">{item.tieude}
					{/* <strong>showcase your content</strong> */}
				</h2>
				<hr className="divider" />
				<p>{item.noidung}</p>
				<p>{item.email}</p>
				{/* <p>{item.thoigian}</p> */}
				{this.Anhien()}
			</div>

		);
	}
}

export default NewsItem;
