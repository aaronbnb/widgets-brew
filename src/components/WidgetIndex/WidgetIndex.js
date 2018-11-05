import React from "react";
import './WidgetIndex.css';
import WidgetIndexItem from '../WidgetIndexItem';


const WidgetIndex = (props) => {
    const { widgets, children } = props;

   return ( <table className="widgets-container">
        <tbody>
        { children }
        {widgets.map( widget => 
            <WidgetIndexItem 
            name={widget.name} 
            url={widget.url}
            id={widget.id}
            color={widget.color}
            size={widget.size.title}
            description={widget.description}
            updated_at={widget.updated_at}
            created_at={widget.created_at}
            key={widget.id} 
            selectWidget={props.selectWidget}/>
        )
        }
        </tbody>
    </table>)
};

  export default WidgetIndex;