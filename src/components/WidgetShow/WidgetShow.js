import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./WidgetShow.css"
import API from '../../utils/API';

class WidgetShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.widget ? props.widget : window.location.href.slice(-2),
            widget: null,
            viewMachine: false
        }
    }

    componentDidMount() {
       API.getWidget(this.state.id).then( ({data}) => {
           this.setState({widget: data});
       }).catch((err) =>
        console.log(err)
     );
    }

    placeholder = () => {

    }

    render() {
    
        const { widget } = this.state;
        if(widget === null) {
            return(<div/>);
            return;
        } 

        let { machine } = this.state.widget;
            

        return(<div>
            <Link to="/">Back to Home</Link>
            <h2>{widget.name[0].toUpperCase() + widget.name.slice(1)}</h2>
            <ul>
                <li>ID: {widget.id} </li>
                <li>Color: {widget.color}</li>
                <li>Name: {widget.name}</li>
                <li>Size: {widget.size.title}</li>
            </ul>
            <h3>Machine Information</h3>
            <ul>
                <li>ID: {machine.id}</li>
                <li>Title: {machine.title}</li>
                <li>Created: {machine.created_at}</li>
            </ul>

        </div>)
        }
      
       
    }




export default WidgetShow;
