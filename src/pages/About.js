import React from 'react';
import './custom.css';
import ServiceCard from '../component/ServiceCard';
import serviceData from '../static/jsonData';
import Skills from '../component/Skills';
import { description } from '../static/jsonData';
import me from '../static/img/Royal.jpg';
export default function About() {

  const service = () => {
    if(serviceData){
      let serviceCount = serviceData.length;
      return (serviceData.map( (service, key) => {
        return (
          <div key={key} className={`col-sm-${12/serviceCount}`}>
            <ServiceCard key={`serviceCard${key}`} title={service.title} icon = {service.icon} contents = {service.content}/>
          </div>
        )
      }))
    }
    return {}
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 about-title">GET TO KNOW ME</div>
        <div className="col-12"><span className="about-title-button box">ABOUT ME</span></div>
      </div>
      <div className="row">
        <div className="about-image col-md-5">
          <img style={{width : "100%"}} src={me} alt="MyImage" />
        </div>
        <div className="about-description col-md-7">
          <h3>Hello, I am Royal Rzaxanov</h3>
          <p>{description.content}</p>
          <div className="span"><i className="fas fa-male" style={{fontSize:"18px"}}></i><label>Royal</label></div>
          <div className="span"><i className="fab fa-skype" style={{fontSize:"18px"}}></i><label>rzaxanovroyal1995@gmail.com</label></div>
          <div className="span"><i className="fas fa-envelope" style={{fontSize:"18px"}}></i><label>rzaxanovroyal1995@gmail.com</label></div>
          <div className="span"><i className="fas fa-map-marker-alt" style={{fontSize:"18px"}}></i><label>Baku,&nbsp;Azerbaijan</label></div>
        </div>
      </div>
      <div className="row cv-container">
        <a href="https://www.dropbox.com/s/pkt35z3mg22xd4z/royal-main.pdf?dl=0" target="_blank" className="main-btn">download cv</a>     
      </div>
      <div className="row service">
        <div className="col-12">
          <h3>MY SERVICES</h3>
        </div>
        {serviceData && service()}
      </div>
      <div className="row">
        <div className="col-12">
          <h3>MY SKILLS</h3>
        </div>
        <Skills />
      </div>
    </div>
  )
}
