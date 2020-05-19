import React from 'react';
import ReactDOM from 'react-dom';

import {firebaseApp,users} from './firebase'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { actLogin, actLogout } from './actions';

const store = createStore(
	appReducers, /* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// kiem tra xem đã đăng nhap chưa , sau đó lấy user đó gửi vào store để lưu lại những giá trị này, sau đó các component khác có thể sủ dụng được
firebaseApp.auth().onAuthStateChanged(function(user) {
	if (user) {
	  // User is signed in.
	  let userInfo = {
		  email:user.email,
			uid:user.uid,
			name:'',
			img:''
		}

		//dùng bảng users để lấy name ra.
		users.child(user.uid).once('value').then(data=>{
			userInfo.name = data.val().name;
			userInfo.img = data.val().img;
			store.dispatch(actLogin(userInfo));
		})
	  
	  
	  // ...
	} else {
	  store.dispatch(actLogout())
	}
  });
  
  console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
