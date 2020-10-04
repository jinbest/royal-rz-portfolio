import React from 'react';
import Portfolio from '../component/Portfolio';
import { works } from '../static/jsonData'

export default function Works() {

  const Portfolios = () => {
    return works.map((work, key) => {
      return (
        <div key={`work${key}`} className="col-lg-4 col-md-6">
          <Portfolio work = {work}/>
        </div>
      )
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className = "col-12" style = {{textAlign : "center"}}>
          <h5>MY RECENT WORKS</h5>
        </div>
        {Portfolios()}
      </div>   
    </div>
  )
}
