import React from 'react';
import List from '../List/List';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

const App = () => {
    const initialData = [
        {
            label: 'Drink Coffee',
            important: false,
            deleted: false,
            id: 1,
        },
        {
            label: 'Eat Health Food',
            important: false,
            deleted: false,
            id: 2,
        },
        {
            label: 'Do Sports',
            important: false,
            deleted: false,
            id: 3,
        },
    ];
    return(
        <div className = 'app'>
            <p>To Do List</p>
            <div className = 'app__todo'>
                <ItemStatusFilter />
                <SearchPanel />
                <List initialData = {initialData}/>
            </div>
            </div>
    );
}
export default App;

