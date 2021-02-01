import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Search({ handleInput, text, icon }) {
  return (
    <section className="searchbox-wrap">
      <div id="searchContainer">
        {icon === "search" ? <SearchIcon /> : <LocationOnIcon />}
        <input
          type="text"
          placeholder={text}
          className="searchbox"
          onChange={handleInput}
          style={{ width: "500px" }}
        />
      </div>
    </section>
  );
}

export default Search;
