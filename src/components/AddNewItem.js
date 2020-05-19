import React, { Component } from 'react'
import { blog } from './../firebase'
import * as firebase from 'firebase';

export default class AddNewItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tieude: '',
            noidung: ''
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
        let { email } = this.props.user.info;
        let kiemtra = "NewItem";


        let date = new Date;
        let ngay = date.getDate();
        let thang = date.getMonth();
        let nam = date.getFullYear();
        let thoigian = ngay + "/" + thang + "/" + nam;
        let time =(-1*date.getTime());

        if(tieude == ""){
            alert("Vui lòng thêm tiêu đề !!!");
        }
        else if(noidung == "")
        {
            alert("Vui lòng thêm nội dung !!!");
        }
        else{
        blog.push({
            tieude: tieude, // tiêu đề của state(lấy từ 2 ô input) sẽ được gắn vào tieude của bảng task
            noidung: noidung,
            kiemtra: kiemtra,
            email: email,
            time:time,
            thoigian:thoigian
        })
        alert("Đăng bài thành công !!!");
    }
        // sau khi push thành công thì 2 ô này sẽ mất đi
        this.setState({ tieude: '', noidung: '' });

        event.preventDefault();
    }

    render() {

        return (
            <div style={{ opacity: '0.8' }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input style={{ background: 'black', color: "white" }} value={this.state.tieude} onChange={this.handleChange} name="tieude" type="text" className="form-control" placeholder="tiêu đề" />
                    </div>
                    <div className="form-group">
                        <textarea style={{ background: 'black', color: "white" }} value={this.state.noidung} onChange={this.handleChange} name="noidung" type="text" className="form-control" placeholder="nội dung" ></textarea>
                    </div>
                    <button style={{"width":"105px"}} type="submit" className="btn btn-info">Thêm</button>
                </form>
            </div>
        );
    }
}
