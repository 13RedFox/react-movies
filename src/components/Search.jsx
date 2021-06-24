import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.onSearch(this.state.search, this.state.type);
    }
  };

  handleCheckBox = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.onSearch(this.state.search, this.state.type);
      },
    );
  };

  render() {
    const { search, type } = this.state;
    const { onSearch } = this.props;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            type="search"
            placeholder="Search..."
            className="validate"
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />

          <button
            className="btn btn-search"
            onClick={() => onSearch(this.state.search, this.state.type)}>
            Search
          </button>

          <div className="radio">
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                checked={type === 'all'}
                onChange={this.handleCheckBox}
              />
              <span>All</span>
            </label>

            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                checked={type === 'movie'}
                onChange={this.handleCheckBox}
              />
              <span>Movies</span>
            </label>

            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                checked={type === 'series'}
                onChange={this.handleCheckBox}
              />
              <span>Series</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
