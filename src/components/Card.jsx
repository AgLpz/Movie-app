import React from 'react'
import "../assets/styles/Card.css"


export const Card = ({id, title, posterPath, voteAverage, overview, }) => {
    
    const API_IMG="https://image.tmdb.org/t/p/original/"

    const cardContainerStyle = {

        backgroundImage: `url("${API_IMG}${posterPath}")`


    }

    return (
        <article className="cardContainer"  style={cardContainerStyle}>
            <div className="ratingContainer">
            <p className="rating">{voteAverage}</p>
            </div>
            <div className="contenedortest">
            <div className="descriptionContainer">

                <h1 className="title">{title}</h1>

                <p className="description">{overview.slice(0, 100)}...</p>

            </div>
            <div className="favBtn">
                <a href="#">+</a>
            </div>


            </div>

          </article>
    )
}
