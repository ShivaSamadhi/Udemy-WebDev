import React, {useState, useEffect} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";


const localServer = `http://localhost:8080/`

const App = () => {

    //Set State
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    //API Search Request
    // const searchMovies = async (title) => {
    //     const res = await fetch(`${API_KEY}&s=${title}`)
    //     const data = await res.json()
    //     const moviesArr = data.Search
    //
    //     setMovies(moviesArr)
    // }

    const searchMovies = async (title) => {
        const localServerReq = `http://localhost:8080/${title}`
        try {
            const res = await fetch(`${localServerReq}`)

            const resData = await res.json()

            console.log(resData)

            setMovies(resData)
        }
        catch{}
    }

    //On Load useEffect
    useEffect(() => {
        searchMovies('dragon')
    }, [])

    //Rendered View
    return (
        <div className="app">
            <h1>Reel Sirius</h1>

            <div className="search">
                <input
                    type="text"
                    placeholder="Find Your Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                    ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard
                                movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )}
        </div>
    );
}

export default App