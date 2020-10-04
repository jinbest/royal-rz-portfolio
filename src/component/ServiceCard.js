import React from 'react'
import './component.css';
export default function ServiceCard(props) {
  const {title, contents, icon} = props
  const showContent = () => {
    if(contents) {
      return contents.map((content, key) => {
        return (<li key = {`serviceContent${key}`}>
          {content}
        </li>)
      })
    }
  }
  return (
    <div className="service-card">
      <div className="service-icon">
        <div>
          <i className={`${icon}`}></i>
        </div>
      </div>
      <div className="service-title">{title}</div>
      <ul>
      { showContent() }
      </ul>
    </div>
  )
}
