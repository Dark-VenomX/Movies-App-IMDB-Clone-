import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css"; // Import the SearchBar styles

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Trim the query to remove leading and trailing whitespaces
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      // Redirect to the search results page with the trimmed query parameter
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
