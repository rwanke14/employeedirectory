import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Enter Search Term"
            id="search"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
