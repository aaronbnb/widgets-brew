import React, { Fragment } from "react";
import './WidgetIndexItem.css';
import Moment from 'moment';
import { Link } from "react-router-dom";



const WidgetIndexItem = props => {
    
    let createdDate =   Moment(props.created_at).month().toString() + "/" + 
                        Moment(props.created_at).days() + "/" + 
                        Moment(props.created_at).year().toString().slice(2);

    let updatedDate =   Moment(props.updated_at).month().toString() + "/" + 
                        Moment(props.updated_at).days() + "/" + 
                        Moment(props.updated_at).year().toString().slice(2);

    let truncatedDescription;

    if(props.description.length >= 10) {
        truncatedDescription = props.description;
    } else {
        truncatedDescription = props.description.slice(0,9) + "..."
    }
    return (

      
        <Fragment>
            
                <tr>
                    <td className="widget-index-item" onClick={() => props.selectWidget(props.id)}>
                    <Link to={`/widgets/${props.id}`}>{props.id}</Link>
                    </td>
                    <td className="widget-index-item">{props.name}</td>
                    <td className="widget-index-item">{props.color}</td>
                    <td className="widget-index-item">{truncatedDescription}</td>
                    <td className="widget-index-item">{props.size}</td>
                    <td className="widget-index-item">{updatedDate}</td>
                    <td className="widget-index-item">{createdDate}</td>
                </tr>
        </Fragment>);
};

export default WidgetIndexItem;