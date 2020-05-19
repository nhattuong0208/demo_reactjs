import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import About from '../components/About';
class AboutPage extends Component {
	
	render() {
		let {user} = this.props;
		if(user.isLogin === false) {
            return <Redirect to='/login' />;
        }
		return (
  			<div>
			    <About user={user}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(AboutPage);

