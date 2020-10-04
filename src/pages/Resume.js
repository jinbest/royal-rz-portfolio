import React from 'react';
import History from '../component/History';
import { experiments } from '../static/jsonData';

export default function Resume() {

  const history = () => {
    return experiments.experiments.map((experiment, key) => {
      return (
        <History key = {`experiments${key}`} history = {experiment}/>
      )
    });
  }

  const education = () => {
    return experiments.education.map((history, key) => {
      return (
        <History key={`education${key}`} history = {history}/>
      )
    })
  } 

  return (
    <div className="container">
      <div className="row">
        <div className = "col-12 resume-title" style={{textAlign:"center", marginTop:"50px"}}>
          <h4 style = {{ fontWeight:"500", fontSize:"28px"}}>EXPERIMENT & EDUCATION</h4>
        </div>
        <div className="col-12">
          <div className="box" style={{padding: "12px 28px", width:"200px", margin:"-10px auto"}}>MY RESUME</div>
        </div>
      </div>
      <div className="row">
        <div className ="col-sm-6">
          <div className ="education">
            <div className="education-icon">
              <i className="fa fa-suitcase"></i>
            </div>
            { history() }
          </div>
        </div>
        <div className ="col-sm-6">
          <div className="education">
            <div className="education-icon">
              <i className="fa fa-graduation-cap"></i>
            </div>
            { education() }
            <div id="certification">
              <img src="./assets/img/royal/royal_certification_3.jpg" style={{width: "490px", marginBottom: "10px"}} />
              <img src="./assets/img/royal/royal_certification_1.jpg" style={{width: "490px", marginBottom: "10px"}} />
              <img src="./assets/img/royal/royal_certification_2.jpg" style={{width: "490px"}} />
            </div>            
          </div>
        </div>        
      </div>
    </div>
  )
}
