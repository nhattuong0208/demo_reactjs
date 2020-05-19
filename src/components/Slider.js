import React, { Component } from 'react';

class Slider extends Component {
	render() {
		return (
  			<div className="bg-faded p-4 my-4">
			    {/* Image Carousel */}
			    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			        <ol className="carousel-indicators">
			            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
			            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
			            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
			        </ol>
			        <div className="carousel-inner" role="listbox">
			            <div className="carousel-item active">
			                <img className="d-block img-fluid w-100" src="img/28377801_744713335737703_5127126607690550556_n.jpg" alt="slide-1" />
			                <div className="carousel-caption d-none d-md-block">
			                    <h2 className="text-shadow">Thư Giãn</h2>
			                    <p className="text-shadow">WebBlog xúc cảm cho tâm hồn bạn</p>
			                </div>
			            </div>
						<div className="carousel-item">
			                <img className="d-block img-fluid w-100" src="img/slide-1.jpg" alt="slide-1" />
			                <div className="carousel-caption d-none d-md-block">
			                    <h2 className="text-shadow">XIN HÃY NGỦ YÊN</h2>
			                    <p className="text-shadow">WebBlog xúc cảm cho tâm hồn bạn</p>
			                </div>
			            </div>
			            <div className="carousel-item">
			                <img className="d-block img-fluid w-100" src="img/19-08-19 20-45-20.png" alt="slide-1" />
			                <div className="carousel-caption d-none d-md-block">
			                    <h2 className="text-shadow">XIN HÃY NGỦ YÊN</h2>
			                    <p className="text-shadow">WebBlog xúc cảm cho tâm hồn bạn</p>
			                </div>
			            </div>
						<div className="carousel-item">
			                <img className="d-block img-fluid w-100" src="img/slide-2.jpg" alt="slide-1" />
			                <div className="carousel-caption d-none d-md-block">
			                    <h2 className="text-shadow">XIN HÃY NGỦ YÊN</h2>
			                    <p className="text-shadow">WebBlog xúc cảm cho tâm hồn bạn</p>
			                </div>
			            </div>
			            <div className="carousel-item">
			                <img className="d-block img-fluid w-100" src="img/1929383_443203502555356_6578683572419105338_n.jpg" alt="slide-1" />
			                <div className="carousel-caption d-none d-md-block">
			                    <h2 className="text-shadow">Kinh Nghiệm</h2>
			                    <p className="text-shadow">WebBlog xúc cảm cho tâm hồn bạn</p>
			                </div>
			            </div>
			        </div>
			        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			        <span className="carousel-control-prev-icon" aria-hidden="true" />
			        <span className="sr-only">Previous</span>
			        </a>
			        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			        <span className="carousel-control-next-icon" aria-hidden="true" />
			        <span className="sr-only">Next</span>
			        </a>
			    </div>
			    {/* Welcome Message */}
			    <div className="text-center mt-4">
			        <div className="text-heading text-muted text-lg">Welcome To</div>
			        <h1 className="my-2">My Blog</h1>
			        <div className="text-heading text-muted text-lg">By
			            <strong>NHAT TUONG</strong>
			        </div>
			    </div>
			</div>
		);
	}
}

export default Slider;
