import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
  			<div>
			    <div className="tagline-upper text-center text-heading text-shadow text-white mt-5 d-none d-lg-block">MY BLOG</div>
			    <div className="tagline-lower text-center text-expanded text-shadow text-uppercase text-white mb-5 d-none d-lg-block">Welcome to the launch of the new and improved WebBlog website and my first blog post</div>
			</div>
		);
	}
}

export default Header;
