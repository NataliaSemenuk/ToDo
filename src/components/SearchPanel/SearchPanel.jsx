import React from 'react';
import './SearchPanel.css';

const SearchPanel = ({ onChange }) => {
    return(
        <input 
            className ='searchPanel' 
            placeholder = 'Search...'
            onChange = {onChange}/>
    );
}
export default SearchPanel;
