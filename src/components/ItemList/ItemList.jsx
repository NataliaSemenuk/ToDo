import React, {Component} from 'react';
import './ItemList.css';

export default class ItemList extends Component {
    render() {
        const {label} = this.props;
        return(
            <div className = 'itemList'>
                <span className = 'itemList__message' onClick = {() => {}}>{label}</span>
                <div>
                    <button className = 'itemList__button'>i</button>
                    <button className = 'itemList__button'>d</button>
                </div>
            </div>
    
        ); 
    }
}
