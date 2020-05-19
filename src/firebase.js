import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXOu3ciCG46Qbgp7_cyxF4adH4F44689M",
    authDomain: "bctt-5505b.firebaseapp.com",
    databaseURL: "https://bctt-5505b.firebaseio.com",
    projectId: "bctt-5505b",
    storageBucket: "",
    messagingSenderId: "512130815877",
    appId: "1:512130815877:web:f9a36513f133de06"
  };

export const firebaseApp =  firebase.initializeApp(firebaseConfig);
export const users =  firebase.database().ref('users');
export const blog =  firebase.database().ref('blog');

