import React from 'react'

const History = (props) => {
 const { company, period, title } = props.history
 const content = () => {
  return props.history.content.map((content, key) => {
    return (
      <li key={`historycontent${key}`}>
        { content }
      </li>
    )
  })
 }
  return (
    <div className="history-wrapper">
      <h5>{company}</h5>
      <p>{title}</p>
      <p>{period}</p>
      <ul>
        {content()}
      </ul>
      <hr style = {{borderColor : "#61dafb"}}/>
    </div>
  )
}

export default History
