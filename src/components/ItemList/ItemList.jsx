import React, {Component} from 'react';
import './ItemList.css';

export default class ItemList extends Component {
    state = {
        done: false,
        important: false,
        deleted: false,
    }

    onLabelClick = () => {
        this.setState({
            done: this.state.done ? false : true,
        });
    }
    onClickImportant = () => {
        this.setState({
            important: this.state.important ? false : true,
        });
    }
    onClickDeleted = () => {
        this.setState({
            deleted: this.state.deleted ? false : true,
        });
    }
    render() {
        const {label} = this.props;
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
                            onClick = {this.onClickDeleted}>d</button>
                </div>
            </div>
    
        ); 
    }
}
