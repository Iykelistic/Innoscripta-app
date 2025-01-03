import React from 'react';

const SearchBar = ({ onSearch }) => (
  <div className="row">
    <div className="col-md-4 mb-2">
      <input
        type="text"
        className="form-control"
        placeholder="Search by keyword"
        onChange={(e) => onSearch({ query: e.target.value })}
      />
    </div>
    <div className="col-md-4 mb-2">
      <select
        className="form-control"
        onChange={(e) => onSearch({ category: e.target.value })}
      >
        <option value="">All Categories</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
      </select>
    </div>
    <div className="col-md-4 mb-2">
      <input
        type="date"
        className="form-control"
        onChange={(e) => onSearch({ date: e.target.value })}
      />
    </div>
  </div>
);

export default SearchBar;
