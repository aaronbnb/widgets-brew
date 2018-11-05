import React from "react";
import './SearchBar.css';

const SearchBar = props => {
    // let children;
    // if(props.advancedSearch === 'true') {
    //     children = props.children;
    // }
    
    return (<div className="search-container">
        <form className="search-form">
            <label htmlFor="search">Search:</label>
            <input type="text" name="search" id="search" 
                onChange={props.handleSearchInput}
            />
            <button onClick={props.submitSearch}>Search</button>
        </form>
        { props.children }
    </div>);

}
    

  export default SearchBar;