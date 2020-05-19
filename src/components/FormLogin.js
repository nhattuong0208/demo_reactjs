import React, { Component } from 'react';
import { actLogin } from './../actions/index';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import { firebaseApp } from '../firebase';

class FormLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
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


	// phương thức dùng để đăng nhập
	handleSubmit = (event) => {
		let { email, password } = this.state;
		//this.props.formLogin(email, password);
		firebaseApp.auth()
		.signInWithEmailAndPassword(email, password)
		.then(data=>{
			alert("ĐĂNG NHẬP THÀNH CÔNG");
		})
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			alert("SAI THÔNG TIN ĐĂNG NHẬP , VUI LÒNG KIỂM TRA LẠI");
			// ...
		  });
		event.preventDefault();
	}

	render() {
		return (
			<div className="bg-faded p-4 my-4">
				<hr className="divider" />
				<h2 className="text-center text-lg text-uppercase my-0">Login <strong>Form</strong></h2>
				<hr className="divider" />
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="form-group col-lg-6">
							<label className="text-heading">username</label>
							<input name="email" value={this.state.email} onChange={this.handleChange} type="text" className="form-control" />
						</div>
						<div className="form-group col-lg-6">
							<label className="text-heading">Password</label>
							<input name="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control" />
						</div>

						<div className="clearfix" />

						<div className="form-group col-lg-12">
							<button type="submit" className="btn btn-secondary">Submit</button>
						</div>

					</div>
				</form>
				<SignUp />
			</div>
		);
	}
}


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		formLogin: (email, password) => {
			dispatch(actLogin(email, password));
		}
	}
}

export default connect(null, mapDispatchToProps)(FormLogin);