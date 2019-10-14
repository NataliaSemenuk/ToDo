import React from 'react';
import './List.css';
import ItemList from '../ItemList/ItemList';

const List = ({initialData}) => {

    const initialList = initialData.map((item) => 
        <li><ItemList {...item}/></li>
    );

    return(
        <ul>
            {initialList}
        </ul>
    );
};
export default List;