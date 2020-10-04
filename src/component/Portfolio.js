import React from 'react'

const Portfolio = (props) => {
  const { screen , title, framework, link } = props.work
  return (
    <div className="portfolio-theme">
      <img src={screen} alt="screen"/>
      <div className="portfolio-details">
        <h3>{title}</h3>
        <h5>{framework}</h5>
        <div>
          <a target="_blank" rel="noopener noreferrer" href = {`${link}`}><i style={{fontSize:"30px"}} className="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
