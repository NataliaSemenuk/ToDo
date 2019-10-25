import React, { Component } from 'react';
import List from '../List/List';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

export default class App extends Component {
    state = {
        initialData: [
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
        ],
    }
    // onClickImportant = () => {
    //     console.log('Hello');
    // }
    // onClickDeleted = () => {
    //     console.log('Hello');
    // }
    render() {
        return(
            <div className = 'app'>
                <p>To Do List</p>
                <div className = 'app__todo'>
                    <ItemStatusFilter />
                    <SearchPanel />
                    <List initialData = {this.state.initialData} />
                </div>
                </div>
        )

    };
}


