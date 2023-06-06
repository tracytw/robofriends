import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="searchBox">
      <h1 className="title">Robofriends</h1>
      <input
        onChange={searchChange}
        className="search"
        type="search"
        placeholder="Search robots by name"
      />
    </div>
  );
};

export default SearchBox;
