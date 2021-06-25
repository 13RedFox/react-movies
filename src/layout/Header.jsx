import React from 'react';

function Header() {
  return (
    <nav className="cyan lighten-2">
      <div className="nav-wrapper">
        <a href="https://13redfox.github.io/react-movies/" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/13RedFox/react-movies" target="_blank" rel="noreferrer">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
