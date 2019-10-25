import React, { Component } from 'react';
import List from '../List/List';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';
import AppHeader from '../AppHeader/AppHeader';

export default class App extends Component {
    state = {
        initialData: [
            {
                label: 'Drink Coffee',
                important: false,
                done: false,
                id: 1,
            },
            {
                label: 'Eat Health Food',
                important: false,
                done: false,
                id: 2,
            },
            {
                label: 'Do Sports',
                important: false,
                done: false,
                id: 3,
            },
        ],
    }

    maxId = 4;

    onDeleteItem = (id) => {
        this.setState(({initialData}) => {
            const idx = initialData.findIndex((el) => el.id === id);    
            const newData = [...initialData.slice(0, idx), ...initialData.slice(idx+1)];
              
        return {
            initialData: newData,
        };
        });
    }
    onAddItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            done: false,
            id: this.maxId++,
        }
        this.setState(({initialData}) => {
            const newData = [...initialData, newItem];
            return {
                initialData: newData,
            }
        });
    }

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);    
        const newItem = {...arr[idx], [propName]: !arr[idx].done};
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx+1)];
        
    }
    onToggleImportant = (id) => {
        this.setState(({initialData}) => {
            return {
                initialData: this.toggleProperty(initialData, id, 'important'),
            }
        });
    }
    onToggleDone = (id) => {
        this.setState(({initialData}) => {
            return {
                initialData: this.toggleProperty(initialData, id, 'done'),
            }
        });
    }
    render() {
        const {initialData} = this.state;
        const doneCount = initialData.filter((item) => item.done).length;
        const toDoCount = initialData.length - doneCount;
        return(
            <div className = 'app'>
                <p>To Do List</p>
                <div className = 'app__todo'>
                    <ItemStatusFilter />
                    <AppHeader toDo = {toDoCount} done = {doneCount}/>
                    <SearchPanel />
                    <List 
                        initialData = {initialData} 
                        onDeleted = {this.onDeleteItem} 
                        onToggleImportant = {this.onToggleImportant}
                        onToggleDone = {this.onToggleDone}/>
                        <ItemAddForm onAddItem = {this.onAddItem}/>
                </div>
                
            </div>
        )

    };
}


