import React from 'react';
import './SearchPanel.css';

const SearchPanel = ({ onChange }) => {
    return(
        <input 
            className ='searchPanel' 
            placeholder = 'What do you add?'
            onChange = {onChange}/>
    );
}
export default SearchPanel;
