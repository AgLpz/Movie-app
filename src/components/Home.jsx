import React, { useEffect, useState } from 'react'
import "../assets/styles/Home.css"
import { Card } from './Card'



const BASE_URL="https://api.themoviedb.org/3/"
const getPopularEndpoint = "movie/popular"
const language="language=es"
const url= `${BASE_URL}${getPopularEndpoint}?${language}`
const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmYyYTBjZGE3MDU3MjMyZDU4MjgzODZjYjA0NDE1MiIsInN1YiI6IjYzODg5N2JiMDM5OGFiMDA4ZmFkNzQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pyNm0MnkMx93OlUR2UoBQRATYkAdBn1dDx6gP3Cp-pY'


const options = {
    headers: {
        Authorization: "Bearer " + authToken,
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
    },
};
const Home = () => {
    const [movie, setMovie] = useState({ title: "Loading Movies" });
    const [movies, setMovies]=useState([]);
    
    useEffect(()=> {
        fetch(url, options)
        .then((res)=>res.json())
        .then(data=>{
            setMovies(data.results)
        })
    }, [])

    const fetchMovie = async(id)=>{
        const { data } = await fetch(`${BASE_URL}/movie/122?`, {

            headers: {
                Authorization: "Bearer " + authToken,
                Accept: "application/json",
                "Content-Type": "application/json;charset=utf-8",
            },
        } )
        setMovie(data)
        console.log(data)

     }


     const selectMovie = async(movie)=> {
         fetchMovie(movie.id)
         setMovie(movie)
     }


    return (<>
        <section  className="homeContainer">
            {movies.map(
            ({ id, title, vote_average, overview, poster_path,   })=> 

            <Card key={id} id ={id} title={title} posterPath={poster_path} voteAverage={vote_average} overview={overview}/>)}

        </section>
     
    
    </>
    )
}

export default Home
