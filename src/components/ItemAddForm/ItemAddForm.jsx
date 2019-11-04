import React, { useState } from 'react';
import './ItemAddForm.css';

export default function ItemAddForm(props) {
    const [label, setLabel] = useState('');
    const onLabelChange = (event) => {
        setLabel(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        props.onAddItem(label);
        setLabel('');
    }
    return(
        <form 
            className = 'itemAddForm' 
            onSubmit = {onSubmit}>
            <input 
                className = 'itemAddForm__panel'
                type = 'text'
                onChange = {onLabelChange}
                placeholder = 'Put your deal here'
                value = {label}/>
            <button
                className = 'itemAddForm__button'>Add item</button>
        </form>
    ); 
}
