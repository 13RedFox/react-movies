import React from 'react';
import Movie from './Movie';

function Movies({ movies = [] }) {
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h5>Not Match </h5>
      )}
    </div>
  );
}

export default Movies;
