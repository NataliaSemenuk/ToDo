import React from 'react';
import './List.css';
import ItemList from '../ItemList/ItemList';

const List = ({initialData, onDeleted, onToggleDone, onToggleImportant}) => {
    
    const initialList = initialData.map((item) => 
        <li className = 'list__item' key = {item.id}>
            <ItemList {...item} 
            onDeleted = {() => onDeleted(item.id)}
            onToggleDone = {() => onToggleDone(item.id)} 
            onToggleImportant = {() => onToggleImportant(item.id)}/>
        </li>
    );

    return(
        <ul className = 'list'>
            {initialList}
        </ul>
    );
};
export default List;