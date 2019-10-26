import React, {Component} from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends Component {
    state = {
        label: '',
    }
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: '',
        })
    }
    render() {
        return(
            <form 
                className = 'itemAddForm' 
                onSubmit = {this.onSubmit}>
                <input 
                    className = 'itemAddForm__panel'
                    type = 'text'
                    onChange = {this.onLabelChange}
                    placeholder = 'Put your deal here'
                    value = {this.state.label}/>
                <button
                    className = 'itemAddForm__button'>Add item</button>
            </form>
        ); 
    }
}
