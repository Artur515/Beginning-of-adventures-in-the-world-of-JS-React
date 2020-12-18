import { useState } from "react";
import React from "react";

const SearchInput = ({ handleSearch }) => {
    return (
        <div className="search">
            <input type="text" placeholder="Search" onChange={handleSearch} />
        </div>
    );
};

export default SearchInput;
