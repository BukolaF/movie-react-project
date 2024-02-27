import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
//f60cc1d6

const api_url = 'http://www.omdbapi.com?apikey=f60cc1d6';
const movie = {
  "Title": "Shrek",
  "Year": "2001",
  "imdbID": "tt0126029",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

function App() {

  const [movies, setMovies] = useState([]);
  const [searchIcon, setSearchIcon] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
 useEffect(() => {
  searchMovies('shrek')
 }, []);

  return (
    <div className="app">
      <h1>MovieSite</h1>

      <div className="search">
        <input placeholder="search for movies"
        value={searchIcon}
        onChange={(e)=> setSearchIcon(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={()=> searchMovies(searchIcon)} />
      </div>

      {
      movies?.length > 0 
        ? (<div className="container">
            {movies.map((movie) => (<MovieCard movie={movie} />))}
            </div>) : (
              <div className="empty">
                <h2>No movies found</h2>
                </div>
            )
}
      
    </div>
  );
}

export default App;
