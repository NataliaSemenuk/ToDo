import React from 'react';
import './List.css';
import ItemList from '../ItemList/ItemList';

const List = ({initialData}) => {
    const initialList = initialData.map((item) => 
        <li className = 'list__item' key = {item.id}>
            <ItemList {...item}/>
        </li>
    );

    return(
        <ul className = 'list'>
            {initialList}
        </ul>
    );
};
export default List;