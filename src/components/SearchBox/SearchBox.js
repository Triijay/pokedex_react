import React from "react";
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className="search_wrapper">
            <input 
                className="search_input"
                type='search'
                placeholder="Search pokemon"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;