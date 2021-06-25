import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      onSearch(search, type);
    }
  };

  const handleCheckBox = (e) => {
    setType(e.target.dataset.type);
    onSearch(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          placeholder="Search..."
          className="validate"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />

        <button className="btn btn-search" onClick={() => onSearch(search, type)}>
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
              onChange={handleCheckBox}
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
              onChange={handleCheckBox}
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
              onChange={handleCheckBox}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Search;
