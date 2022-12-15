import React from 'react'
import "../assets/styles/Movie.css"
import imgTest from"../assets/testCardImg.png"

const Movie = () => {
    return (
        <section className="movieContainer">

            <article className="movie">
                <picture className="imgContainer"><img className="img" src={imgTest} alt="" /></picture>
                <div className="descriptionContainer">
                    <h1 className="title">Black Adam</h1>
                    <ul className="genreList">
                    <li>Acción</li>
                    <li>Fantasia</li>
                    <li>Ciencia Ficción</li>
                    </ul>

                    <p className="descritpionText">Emily, que tiene una deuda estudiantil y está excluida del mercado laboral debido a antecedentes penales menores, se ve involucrada en una estafa con tarjeta de crédito que la lleva al inframundo criminal de Los Ángeles, lo que finalmente la lleva a consecuencias mortales.</p>
                    <p className="presupuesto">Presupuesto: <span>200.000.000$</span></p>
                    <p className="lanzamiento">Lanzamiento: <span>2022-10-19</span></p>
                    <p className="duracion">Duración: <span>124 min</span></p>
                    <p className="valoracion">Valoración: <span>7.029</span></p>

                    <ul className="languages">
                        <li>English</li>
                    </ul>
                </div>

            </article>
        </section>
    )
}

export default Movie
