import React from 'react';
import './SearchBar.css';
const SearchBar = ({handleChange}) => {

    return(
        <div className = "search-container">
            <input onChange={(event)=> handleChange(event.target.value)} placeholder="Enter a keyword" className="search-input"/>
        </div>
    );

}

export default SearchBar;
