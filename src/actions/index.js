import * as types from './../constants/ActionType';

// hàng động login có gửi kèm username và pass
export const actLogin = (userInfo) => {
	return {
		type : types.USER_LOGIN,
		userInfo
	}
}
export const actLogout = () => {
	return {
		type : types.USER_LOGOUT
	}
}