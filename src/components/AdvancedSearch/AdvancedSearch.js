import React from "react";
import './AdvancedSearch.css';
import Select from "react-select"

// const AdvancedSearch = props => (
//     <div className="search-container">

//         <select>
//             <option name="default">Select Color</option>
//             {props.colors.map( (color, idx) => 
//             <option name={color}>{color}</option>)}
//         </select>
//     </div>
// );

const AdvancedSearch = props => {

    let options = [ "All", ...props.colors].map( color => ({
                label: color, 
                value: color
            }));


    return (<div className="search-container">
                < Select
                    value={props.selectedOption}
                    onChange={props.handleColorFilter}
                    options={options}
                />
            </div>)
}
   


  export default AdvancedSearch;

