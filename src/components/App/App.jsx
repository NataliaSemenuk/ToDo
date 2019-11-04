import React, { useState } from 'react';
import List from '../List/List';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';
import AppHeader from '../AppHeader/AppHeader';

export default function App() {
    let visibleData;
    const [initialData, setInitialData] = useState([
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
    ]);
    const [searchData, setSearchData] = useState([]);
    const [clickDoneFlag, setDone] = useState(false);
    const [clickActiveFlag, setActive] = useState(false);
    const doneCount = initialData.filter((item) => item.done).length;
    const toDoCount = initialData.length - doneCount;

    const onAddItem = (text) => {
        let maxId = 4;
        const newItem = {
            label: text,
            important: false,
            done: false,
            id: maxId++,
        }
        setInitialData([
            ...initialData, newItem 
        ]);
    }
    const onDeleteItem = (id) => {
        const idx = initialData.findIndex((el) => el.id === id);    
        const newData = [...initialData.slice(0, idx), ...initialData.slice(idx+1)];
        setInitialData(newData);
    }

    const toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((item) => item.id === id);    
        const newItem = {...arr[idx], [propName]: !arr[idx][propName]};
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx+1)];
        
    }
    const onToggleImportant = (id) => {
        setInitialData(toggleProperty(initialData, id, 'important'));
    }
    const onToggleDone = (id) => {
        setInitialData(toggleProperty(initialData, id, 'done'));
    }
    
    const onChangeSearch = (event) => {
        let textSearch = event.target.value.toLowerCase(); 
        setSearchData([textSearch]);
    }
    function search(data = initialData) {
        let visibleData = [];
        data.forEach((item) => {
            const label = item.label.toLowerCase();
            const foundPos = label.startsWith(searchData);
            if(foundPos) {
                visibleData.push(item);
            } 
        });
        return visibleData;
    }

    function changeStatus(status) {
        let visibleData = [];
        initialData.forEach((item) => {
            if(item.done === status) {
                visibleData.push(item);
            } 
        });
        return visibleData;
    }
    const clickDone = () => changeStatus(true);
    const clickActive = () => changeStatus(false);

    const onClickDone = () => {
        setDone(true);
        setActive(false);
    }
    const onClickActive = () => {
        setDone(false);
        setActive(true);
    }
    const onClickAll = () => {
        setDone(false);
        setActive(false);
    }

    if(clickDoneFlag) {
        visibleData = clickDone();
        visibleData = search(visibleData);
    } else if(clickActiveFlag) {
        visibleData = clickActive();
        visibleData = search(visibleData);
    } else {
        visibleData = search();
    }

    return(
        <div className = 'app'>
            <p>To Do List</p>
            <div className = 'app__todo'>
                <ItemStatusFilter
                    onClickAll = {onClickAll}
                    onClickDone = {onClickDone}
                    onClickActive = {onClickActive} />
                <AppHeader toDo = {toDoCount} done = {doneCount}/>
                <SearchPanel 
                    onChange = {onChangeSearch}/>
                <List 
                    initialData = {visibleData}
                    onDeleted = {onDeleteItem}
                    onToggleImportant = {onToggleImportant}
                    onToggleDone = {onToggleDone}/>
                <ItemAddForm  onAddItem = {onAddItem}/>
            </div>
            
        </div>
    );
}

