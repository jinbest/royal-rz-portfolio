import React from 'react'

const List = (props) => {
  const { icon, title } = props
  return (
    <>
      <div className="list-group">
        <div className="listIcon">
          <i className={icon}></i>
        </div>
        <div className="listName">{title}</div>
      </div>
    </>
  )
}

export default List;