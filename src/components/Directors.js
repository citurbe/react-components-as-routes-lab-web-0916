import React from 'react'
import { directors } from '../data'

const Directors = () => {
    return (
        <div>
            <h1>Directors Page</h1>
            {directors.map(dir =>{
              return <div>
                Name: {dir.name}
                Movies: {dir.movies}
              </div>
            })}
        </div>
    )
}

module.exports = Directors
