import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search Here</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
