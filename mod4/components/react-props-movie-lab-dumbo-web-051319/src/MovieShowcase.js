import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = (movies) => {
    // map over your movieData array and return the correct 
    return movies.map((movie, idx) => <MovieCard oneMovie={movie} key={idx}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}
