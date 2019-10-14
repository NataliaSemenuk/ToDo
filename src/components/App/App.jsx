import React from 'react';
import List from '../List/List';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';

const App = () => {
    const initialData = [
        {
            label: 'Drink Coffee',
            important: false,
            deleted: false,
        },
        {
            label: 'Eat Health Food',
            important: false,
            deleted: false,
        },
        {
            label: 'Do Sports',
            important: false,
            deleted: false,
        },
    ];
    return(
        <div>
            <h1>ToDo List</h1>
            <SearchPanel />
            <List initialData = {initialData}/>
        </div>
    );
}
export default App;