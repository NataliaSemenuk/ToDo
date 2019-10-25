import React, {Component} from 'react';
import './ItemList.css';

export default class ItemList extends Component {
    state = {
        done: false,
        important: false,
        deleted: false,
    }

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done,
            }
        });
    }
    onClickImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important,
            }
        });
    }
    render() {
        const {label, onDeleted} = this.props;
        let classNameMess = 'itemList__message';

        if(this.state.done) {
            classNameMess += ' done';
        }
        if(this.state.important) {
            classNameMess += ' important'; 
        }
        if(this.state.deleted) {
            classNameMess += ' deleted';
        }
        return(
            <div className = 'itemList'>
                <span className = {classNameMess}
                        onClick = {this.onLabelClick}>{label}</span>
                <div>
                    <button className = 'itemList__button'
                            onClick = {this.onClickImportant}>i</button>
                    <button className = 'itemList__button'
                            onClick = {onDeleted}>d</button>
                </div>
            </div>
    
        ); 
    }
}
