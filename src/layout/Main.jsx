import React, { Component } from 'react';
import Search from '../components/Search';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=man`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchFilms = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`,
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search onSearch={this.searchFilms} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}
