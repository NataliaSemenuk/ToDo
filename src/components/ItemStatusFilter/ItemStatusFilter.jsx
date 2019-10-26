import React, {Component} from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component{
    render() {
        const { onClickDone, onClickActive, onClickAll } = this.props;
        return (
            <div className = 'itemStatusFilter'>
                <button className = 'itemStatusFilter__button'
                        onClick = {onClickAll}>All</button>
                <button className = 'itemStatusFilter__button'
                        onClick = {onClickActive}>Active</button>
                <button className = 'itemStatusFilter__button'
                        onClick = {onClickDone}>Done</button>
            </div>
        );
    }
}