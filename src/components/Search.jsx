import React, { useEffect, useState } from 'react'
import "../assets/styles/Home.css"
import { Card } from './Card'



const Search = ({data}) => {
    

    return (<>
        <section className="homeContainer">
            {data.map(
            ({ id, title, vote_average, overview, poster_path  })=> 

            <Card key={id} id ={id} title={title} posterPath={poster_path} voteAverage={vote_average} overview={overview}/>)}

        </section>
    
    
    </>
    )
}

export default Search
