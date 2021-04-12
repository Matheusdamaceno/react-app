import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA6B-uFViW7xyo5h0WmnzStL4ItVXhdRLw",
  authDomain: "react-firebase-ex-8b726.firebaseapp.com",
  projectId: "react-firebase-ex-8b726",
  storageBucket: "react-firebase-ex-8b726.appspot.com",
  messagingSenderId: "759490807164",
  appId: "1:759490807164:web:699fd972a8844968a1d0f9"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
