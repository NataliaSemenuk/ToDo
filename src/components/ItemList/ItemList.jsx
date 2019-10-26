import React from 'react';
import './ItemList.css';

const ItemList = ({label, onDeleted, onToggleImportant, onToggleDone, important, done}) => {
    let classNameMess = 'itemList__message';
    if(important) {
        classNameMess += ' important';
    }
    if(done) {
        classNameMess += ' done';
    }
    
    return(
        <div className = 'itemList'>
            <span className = {classNameMess}
                    onClick = {onToggleDone}>{label}</span>
            <div>
                <button className = 'itemList__button'
                        onClick = {onToggleImportant}>i</button>
                <button className = 'itemList__button'
                        onClick = {onDeleted}>d</button>
            </div>
        </div>

    ); 
}
export default ItemList;
// clickActive() {
//     let visibleData = [];
//     const { initialData } = this.state;
//     initialData.forEach((item) => {
//         if(!item.done) {
//             visibleData.push(item);
//         } 
//     });
//     return visibleData;
// }