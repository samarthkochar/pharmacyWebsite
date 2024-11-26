import React from "react";

const SearchBar = () => {
  return (
    <div className="container" style={{marginTop:'5rem'}}>
      <form className="d-flex mt-3 mb-3" role="search">
        <h3>What are you Looking for?</h3>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Medicines or Products..."
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
