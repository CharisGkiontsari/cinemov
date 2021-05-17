import React from 'react'
import './Movie.css'

function Movie({id,title,rating,about,image}){


    return (
        <div className="movie">
            <div className="movie__info">
                <p>{title}</p>
                <p>{about}</p>
                <div className="movie__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) =>(
                            <p>*</p>
                        ))
                    }
                </div>
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default Movie;