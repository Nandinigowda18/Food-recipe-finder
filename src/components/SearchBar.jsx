import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center my-4">
      <input
        type="text"
        className="form-control w-50 me-2"
        placeholder="Search recipes...like Chicken"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}

export default SearchBar;


