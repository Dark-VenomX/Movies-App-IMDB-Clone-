import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import the new SearchBar component

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to="/">
          <img
            className="navbar-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="IMDb Logo"
          />
        </Link>
        <Link to="/movies/popular" className="nav-link">
          Popular
        </Link>
        <Link to="/movies/top_rated" className="nav-link">
          Top Rated
        </Link>
        <Link to="/movies/upcoming" className="nav-link">
          Upcoming
        </Link>
      </div>
      {/* Add the SearchBar component */}
      <div className="navbar-right">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
