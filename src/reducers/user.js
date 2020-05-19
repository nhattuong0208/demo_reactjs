import * as types from './../constants/ActionType';

let defaultState = {
	isLogin: false,  // trang thai cho biet da dang nhap hay chua
	info: {email:'',uid:'',name:'',img:''}  // ten dang nhap khi dang nhap thanh cong
};


// nhan vao 2 tham số , state đó tên gì dùng làm gì
const user = (state = defaultState, action) => {

	switch(action.type){

		case types.USER_LOGIN:
			state.isLogin=true;
			state.info = action.userInfo;
			console.log(action)
			return {...state};

		case types.USER_LOGOUT:
			state.isLogin = false;
			state.info = {email:'',uid:'',name:'',img:''};
			return {...state};

		default:
			return state;
	}
}

export default user;