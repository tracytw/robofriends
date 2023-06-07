import React from "react";

const Search = ({ searchChange }) => {
  return (
    <div className="search">
      <input
        onChange={searchChange}
        type="search"
        placeholder="search robot by name"
      />
    </div>
  );
};

export default Search;
