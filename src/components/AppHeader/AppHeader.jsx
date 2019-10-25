import React from 'react';
import './AppHeader.css';

const AppHeader = ({ toDo, done }) => {
    
    return (
        <div className = 'appHeader'>
            <span className = 'appHeader__info'>{toDo} more to do, {done} done</span>
        </div>
    );
};
export default AppHeader;