import React from 'react'
import { movies } from '../data'

const Movies = () => {
    return (
        <div>
            <h1>Movies Page</h1>
            {movies.map(movie => {
              return<div><ul>
                <li>Title: {movie.title}</li>
                <li>Time: {movie.time}</li>
                <li>Genres: {movie.genres}</li>
                <li>Metascore: {movie.metascore}</li>
              </ul>
              </div>
            })}
        </div>
    )
}

module.exports = Movies
