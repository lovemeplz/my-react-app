/*
 * @Descripttion: 
 * @Version: v0.1.0
 * @Author: shenziqiang
 * @Date: 2023-08-21 14:59:23
 * @LastEditors: shenziqiang
 * @LastEditTime: 2023-08-25 10:09:41
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


function curry(f) {
  return function(a){
    return function(b){
      return f(a,b)
    }
  }
}

function sum(a,b){
  return a+b
}

let curriedSum = curry(sum)
console.log(curriedSum(1)(2))

reportWebVitals();
