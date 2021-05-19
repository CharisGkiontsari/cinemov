import React from 'react'
import './Row.css'

function Row({title, img, about, link}) {
    return(
        <a href={link}>
        <div className="row" style={{backgroundImage: `url(${img})`}}>
            <h2>{title}</h2>
            <p>{about}</p>
        </div>
        </a>
    )
}

export default Row