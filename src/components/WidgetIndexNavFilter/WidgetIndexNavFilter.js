import React, { Fragment } from "react";
import './WidgetIndexNavFilter.css';

const WidgetIndexNavFilter = ({ colors }) => {
    
    
    return (<Fragment>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Description</th>
            <th>Size</th>
            <th>Last Updated</th>
            <th>Created At</th>
        </tr>
    </Fragment>);
}



export default WidgetIndexNavFilter;