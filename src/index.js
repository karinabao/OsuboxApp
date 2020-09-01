import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

var firebaseConfig = {
    apiKey: "AIzaSyADUv9adwnnXU37k_B_tYqkTXRPxEe0V2Y",
    authDomain: "help-faeaa.firebaseapp.com",
    databaseURL: "https://help-faeaa.firebaseio.com",
    projectId: "help-faeaa",
    storageBucket: "help-faeaa.appspot.com",
    messagingSenderId: "358153080248",
    appId: "1:358153080248:web:36c00ef0f1f1c744d0934d"
  };


const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase}}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
