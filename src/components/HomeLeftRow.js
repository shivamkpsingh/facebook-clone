import React from 'react'
import './HomeLeftRow.css'
const HomeLeftRow = ({Icon,title}) => {
    return (
        <div className="homeLeftRow">
           <Icon />
           <h3>{title}</h3>
        </div>
    )
}

export default HomeLeftRow
