import React, { Component } from 'react';
import Slider from './../components/Slider';
import NewsItem from './../components/NewsItem';
import BlogItem from './../components/BlogItem';
import { blog } from './../firebase';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item: []
		};
	}

	componentWillMount() {
		blog.orderByChild("time").on('value', items => {
			let data = [];
			items.forEach(item => {
				const { tieude, noidung, email,hinhanh,kiemtra,thoigian } = item.val();
				data.push({ tieude, noidung, email,hinhanh,kiemtra,thoigian, key: item.key });
			})
			this.setState({ item: data });
		})		
	}

	render() {
		let { item } = this.state;

		return (
			<div>
				<Slider />
				{this.showItem(item)}
			</div>
		);
	}
	showItem(items) {
		let xhtml = null;
		
		if (items.length > 0) {
			xhtml = items.map((item, index) => {
				if (item.kiemtra == "NewItem"){
					return (
						<NewsItem key={index} item={item} index={index} />
					);
				}else{
					return (
						<BlogItem key={index} item={item} index={index} />
					);
				}
			});
		}
		return <div>{xhtml}</div>;
	}
}

export default HomePage;
