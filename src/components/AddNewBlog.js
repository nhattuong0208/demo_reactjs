import React, { Component } from 'react'
import { blog } from './../firebase'
import * as firebase from 'firebase';

export default class AddNewBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tieude: '',
            noidung: '',
            hinhanh: ''
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

    // dùng để thêm một bài viết vào bảng task
    handleSubmit = (event) => {
        let { tieude } = this.state;
        let { noidung } = this.state;
        let { hinhanh } = this.state;
        let { email } = this.props.user.info;
        let kiemtra = "Blog";

        let date = new Date;
        let ngay = date.getDate();
        let thang = date.getMonth();
        let nam = date.getFullYear();
        let thoigian = ngay + "/" + thang + "/" + nam;
        let time = (-1*date.getTime());
       
        if(tieude == ""){
            alert("Vui lòng thêm tiêu đề !!!");
        }
        else if(noidung == "")
        {
            alert("Vui lòng thêm nội dung !!!");
        }else if(hinhanh == "")
        {
            alert("Vui lòng hình ảnh !!!");
        }
        else{
            blog.push({
                tieude: tieude, // tiêu đề của state(lấy từ 2 ô input) sẽ được gắn vào tieude của bảng task
                noidung: noidung,
                hinhanh: hinhanh,
                kiemtra:kiemtra,
                email: email,
                time:time,
                thoigian:thoigian,
            })
            alert("Đăng bài thành công !!!");
        }
        
        // sau khi push thành công thì 2 ô này sẽ mất đi
        this.setState({ tieude: '', noidung: '', hinhanh: '' });

        event.preventDefault();
    }

    theimage = () =>{
        let filename = document.getElementById("file-id").files[0].name;
        let hinhanh = document.getElementById('file-path').value = "img/"+filename;
        this.setState({
            hinhanh: hinhanh
        });
        //alert(filename);
    }

    render() {
        return (
            <div>
                <br/>
                <button style={{"opacity":"0.8"}} type="submit" className="btn btn-warning" data-toggle="modal" data-target="#myModal3">VIẾT BLOG</button>
                <div class="modal" id="myModal3">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input style={{ background: 'black', color: "white" }} value={this.state.tieude} onChange={this.handleChange} name="tieude" type="text" className="form-control" placeholder="tiêu đề" />
                                </div>
                                <div className="form-group">
                                    <textarea id="textblog" style={{ background: 'black', color: "white" }} value={this.state.noidung} onChange={this.handleChange} name="noidung" type="text" className="form-control" placeholder="nội dung" ></textarea>
                                </div>
                                <div className="form-group">
                                <input onChange={this.theimage} id="file-id" type="file" accept="video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv, image/*, image/heic, image/heif"/>
                                <input id="file-path"  style={{ background: 'black', color: "white" }} value={this.state.hinhanh} onChange={this.handleChange} name="hinhanh"  className="form-control" placeholder="hình ảnh" ></input>
                                    
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-6">
                                        <button type="submit" className="btn btn-success">Add</button>
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
