import React, {Component} from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component{
    render() {
        return (
            <div className = 'itemStatusFilter'>
                <button className= 'itemStatusFilter__button'>All</button>
                <button className= 'itemStatusFilter__button'>Active</button>
                <button className= 'itemStatusFilter__button'>Done</button>
            </div>
        );
    }
}