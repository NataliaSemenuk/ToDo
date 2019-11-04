import React from 'react';
import './ItemStatusFilter.css';

export default function ItemStatusFilter({ onClickDone, onClickActive, onClickAll }) {
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