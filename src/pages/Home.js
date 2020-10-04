import React from 'react';
import './custom.css';
import bk from '../static/img/bk.png'
export default function Home() {
  return (
    <div className="row">
      <div className="col-xl-6 col-md-12">
        <div className="home-info">
          <h3>Hello, My Name is </h3>
          <h1>Royal Rzaxanov</h1>
          <h3>
            <i className="fas fa-check"></i>&nbsp;&nbsp;Front-End Developer
          </h3>
          <h3>
            <i className="fas fa-check"></i>&nbsp;&nbsp;Python Developer
          </h3>
          <h3>
            <i className="fas fa-check"></i>&nbsp;&nbsp;Browser Extension Developer
          </h3>  
          <a href="https://www.upwork.com/freelancers/~01e512eedd75d82ffd" target="_blank" className="main-btn">Hire Me</a>              
        </div>
      </div>
      <div className="home-right col-xl-6 col-md-0">
          <img src = {bk} alt="img"/>
      </div>
    </div>
  )
}
