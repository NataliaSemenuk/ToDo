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
        searchData: [],
        clickDone: false,
        clickActive: false,
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
        const idx = arr.findIndex((item) => item.id === id);    
        const newItem = {...arr[idx], [propName]: !arr[idx][propName]};
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


    onChangeSearch = (event) => {
        let textSearch = event.target.value.toLowerCase(); 
        this.setState({
                searchData: textSearch,
        });
    }
    search(data = this.state.initialData) {
        let visibleData = [];
        const { searchData } = this.state;
        data.forEach((item) => {
            const label = item.label.toLowerCase();
            const foundPos = label.startsWith(searchData);
            if(foundPos) {
                visibleData.push(item);
            } 
        });
        return visibleData;
    }


    changeStatus(status) {
        let visibleData = [];
        const { initialData } = this.state;
        initialData.forEach((item) => {
            if(item.done === status) {
                visibleData.push(item);
            } 
        });
        return visibleData;
    }
    clickDone = () => this.changeStatus(true);
    clickActive = () => this.changeStatus(false);


    onClickDone = () => {
        this.setState({
            clickDone: true,
            clickActive: false,
        });
    }
    onClickActive = () => {
        this.setState({
            clickActive: true,
            clickDone: false,
        });
    }
    onClickAll = () => {
        this.setState({
            clickActive: false,
            clickDone: false,
        });
    }

    
    render() {
        const {initialData, clickDone, clickActive} = this.state;
        let visibleData;

        if(clickDone) {
            visibleData = this.clickDone();
            visibleData = this.search(visibleData);
        } else if(clickActive) {
            visibleData = this.clickActive();
            visibleData = this.search(visibleData);
        } else {
            visibleData = this.search();
        }

        const doneCount = initialData.filter((item) => item.done).length;
        const toDoCount = initialData.length - doneCount;
        return(
            <div className = 'app'>
                <p>To Do List</p>
                <div className = 'app__todo'>
                    <ItemStatusFilter 
                        onClickAll = {this.onClickAll}
                        onClickDone = {this.onClickDone}
                        onClickActive = {this.onClickActive}/>
                    <AppHeader toDo = {toDoCount} done = {doneCount}/>
                    <SearchPanel 
                        onChange = {this.onChangeSearch}/>
                    <List 
                        initialData = {visibleData} 
                        onDeleted = {this.onDeleteItem} 
                        onToggleImportant = {this.onToggleImportant}
                        onToggleDone = {this.onToggleDone}/>
                    <ItemAddForm onAddItem = {this.onAddItem}/>
                </div>
                
            </div>
        )

    };
}


