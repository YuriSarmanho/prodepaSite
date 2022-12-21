import React from "react";
import SearchButton from "../Buttons/SearchButton";
import SearchInput from "../SearchInput";
import "./index.css";

function Search() {
  return (
    <div className="searchContainer">
      <SearchInput />
      <SearchButton children={"buscar"} />
    </div>
  );
}

export default Search;
