import React, { useState, useEffect } from 'react'
import tdtLogo from"../assets/tdtLogo.png"
import lupaImg from "../assets/magnifying-glass-solid.svg"

import "../assets/styles/Navbar.css"
import Search from './Search'

const BASE_URL="https://api.themoviedb.org/3/"
const getSearchEndpoint = "search/movie"
const language="language=es"
const url= `${BASE_URL}${getSearchEndpoint}?${language}&query=`
const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmYyYTBjZGE3MDU3MjMyZDU4MjgzODZjYjA0NDE1MiIsInN1YiI6IjYzODg5N2JiMDM5OGFiMDA4ZmFkNzQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pyNm0MnkMx93OlUR2UoBQRATYkAdBn1dDx6gP3Cp-pY'


const options = {
    headers: {
        Authorization: "Bearer " + authToken,
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
    },
};

export const Navbar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([])

    const searchMovie = async(e) => {
        e.preventDefault();
     try {
         const urlSearch = `${url}${query}`
         const res = await fetch(urlSearch, options)
         const data = await res.json();
         console.log(data)
         setResults(data.results);
     } catch (error) {
         console.log(error)
     } 
      }
      const changeHandler = (e)=> {
          setQuery(e.target.value);
      }

    return (<>
        <div className="navbarContainer">

    <picture className="imgContainer">
        <a href="">

    <img className="tdtLogo" src={tdtLogo} alt="TDT GLOBAL" />
        </a>
    </picture>



     <form className="searchContainer" onSubmit={searchMovie}>
         
         <input
          name="query"
           className="inputSearch" 
           type="text" 
           placeholder="  Buscar.." 
           value={query} 
           onChange={changeHandler}
          />

          <div  className="inputBtn">
         <input style={{ backgroundImage: `url(${lupaImg})`}}
         className="searchBtn" 
         type="submit"
          value=''
           />
          </div>
         

           
            </form>
            <div className="btnContainer">
            <a className="favButton" href="#">Ver favoritos 3</a>
            </div>
        </div>
        
        <Search data={results}/>
        


                
         </>
    )
};
 