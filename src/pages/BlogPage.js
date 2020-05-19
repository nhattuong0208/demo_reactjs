import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewsItem from './../components/NewsItem';
import BlogItem from './../components/BlogItem';
import AddNewItem from './../components/AddNewItem';
import { blog } from './../firebase';
import AddNewBlog from '../components/AddNewBlog';

class BlogPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			item: []
		};
	}


	// được gọi trước render, k nen gọi setState trong này vì chưa dom đến, 
	//lấy nội dung của bảng task rồi gắn vào item của state
	componentWillMount() {
		blog.orderByChild("time").on('value', items => {
			let data = [];
			items.forEach(item => {
				const { tieude, noidung, email, hinhanh , kiemtra , time, thoigian } = item.val();
				data.push({ tieude, noidung, email, hinhanh, kiemtra , time ,thoigian, key: item.key });
			})
			this.setState({ item: data });
		})
	}

	render() {
		// sau khi có nội dung trong state từ bàng task thì ta dùng hàm showItem gọi đến item để render ra toàn bộ nội dung
		let { item } = this.state;
		// let { item2 } = this.state;



		let { user } = this.props; // user này là user đã đang nhập
		if (user.isLogin === false) {
			return <Redirect to='/login' />;
		}
		return (
			<div>
				{/* gửi user qua cho addnewItem để lấy mail gắn vào , để biết bài đang này của mail nào */}
				<AddNewItem user={user} />
				<AddNewBlog user={user} />
				{this.showItem(item)}
			</div>
		);
	}
	showItem(items) {
		let user = this.props.user.info;
		let xhtml = null;
		let anhien = 0;
		if (items.length > 0) {
			xhtml = items.map((item, index) => {
				if (item.email == user.email) {
					if (item.kiemtra == "NewItem") {
						return (
							<NewsItem key={index} anhien={anhien} item={item} index={index} />
						);
					} else {
						return (
							<BlogItem key={index} anhien={anhien} item={item} index={index} />
							
						);
					}
				}
			});
		}
		return <div>{xhtml}</div>;
	}

}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, null)(BlogPage);
