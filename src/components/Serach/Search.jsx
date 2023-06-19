import React from 'react'
import './Search.scss'

const Search = ({ setSearch }) => {
  

  return (
    <div>
      <Search active="Serach" />
      <label className="serach">
        <i className="bx bx-search"></i>
        <input
          className="w-full px-4 py-6 rounded-md"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Enter foods name..."
        />
      </label>
    </div>
  );
}

export default Search