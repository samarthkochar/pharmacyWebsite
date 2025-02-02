import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const[searchItem, setSearchItem]= useState("");
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/products/search/${searchItem}`)
    setSearchItem('')
  }
  return (
    <div className="container" style={{marginTop:'6rem', zIndex:3,position: 'relative'}}>
      <form onSubmit={handleSubmit} className="d-flex mt-3 mb-3" role="search">
        <h3>What are you Looking for?</h3>   
        <input
          className="form-control me-2"
          value={searchItem}
          onChange={(e)=>setSearchItem(e.target.value)}
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
