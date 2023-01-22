import React,{useEffect, useState} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
//c9fe2bbd

const API_URL = 'http://omdbapi.com?apikey=c9fe2bbd'

const App = () =>{
      const [movies, setMovies] = useState([])
      const [inputVal,setInputVal] = useState('')
      
    
        const search_movie= async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
         }

    useEffect(()=>{
       
        search_movie('batman')
        
    },[])

   


   
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="Search for movies"
                value={inputVal}
                onChange={(e)=>setInputVal(e.target.value)}
                />
            <img
            src={SearchIcon}
            alt="Search"
            onClick={()=>{search_movie(inputVal)}}
            />
            </div>

       
            {movies?.length>0
                ?(
                    <div className="container">
                    {movies.map((movie)=>{
                   return <MovieCard movie1={movie}/>
                     })}
                    </div>
              

                )
                :(
                    <div className="empty">
                        <h2>No movies Found</h2>
                    </div>
                )
                   

            }
          
          

       

        </div>
    )
}

export default App 