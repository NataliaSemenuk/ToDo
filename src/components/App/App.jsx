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
    deletedItem = (id) => {
        this.setState(({initialData}) => {
            const idx = initialData.findIndex((el) => el.id === id);    
            const newData = [...initialData.slice(0, idx), ...initialData.slice(idx+1)];
              
        return {
            initialData: newData,
        };
        });
    }
    render() {
        return(
            <div className = 'app'>
                <p>To Do List</p>
                <div className = 'app__todo'>
                    <ItemStatusFilter />
                    <SearchPanel />
                    <List initialData = {this.state.initialData} 
                        onDeleted = {this.deletedItem} />
                </div>
                </div>
        )

    };
}


