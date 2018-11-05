import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './WidgetForm.css'
import API from '../../utils/API';

class WidgetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            name: "",
            color: "",
            description: "",
            size: "",
            success: false,
            errors: undefined
        }
    }

    handleSubmit = event => {
        console.log(this.state)
        event.preventDefault();
        let widget = {"widget": {
            name: this.state.name,
            color: this.state.color,
            description: this.state.description,
            size_id: parseInt(this.state.size),
            machine_id: 1
        }}

        API.createWidget(widget).then( (data) => {
            if(data.status == 201) {
                this.setState({success: true})
            }
        }).catch((err) =>
        console.log(err)
      );
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    render() {

        if(this.state.success) {
            return (<Redirect to='/'/>);
        };

        return(<div>
             <Link to="/">Back to Home</Link>
            <form>
                <h2>Create A Widget!</h2>
                <li>
                    <div><label htmlFor="widget-name">Name</label></div>
                    <input type="text" name="name" id="widget-name" onChange={this.handleChange}></input>
                </li>
                <li>
                    <div><label htmlFor="widget-color" >Color</label></div>
                    <input type="text" name="color" id="widget-color" onChange={this.handleChange}></input>
                </li>
                <li>
                    <div><label htmlFor="widget-description">Description</label></div>
                    <textarea type="text" name="description" id="widget-description" rows="4" cols="50" 
                    onChange={this.handleChange}>
                    </textarea>
                </li>
                <li>
                    <div><label htmlFor="widget-size">Size</label></div>
                    <input type="text" name="size" id="widget-size" onChange={this.handleChange}></input>
                </li>
                <button onClick={this.handleSubmit}>Create Your New Widget</button>
            </form>
        </div>)
    }

}

export default WidgetForm;