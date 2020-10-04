import React from 'react';

const Skillbar = (props) => {
  const { title, percent } = props
  return (
    <div>
      <h5 className="skill-title">{title}</h5>
      <h5 className="skill-percent">{percent}</h5>
      <div className="progress" style = {{ height: "5px"}}>
        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: `${percent}`}}></div>
      </div>
    </div>
  )
}

export default Skillbar