/**
 * Created by bogdan on 04.11.17.
 */
import React from 'react';

import Keyboard from '../keyboard/Keyboard.Component'

// css styles
import './Search.Component.css'

// images
// import logo from '../../logo.svg';


class Search extends  React.Component{

    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onFocus(){
        this.inputContainer.className += " Search__input-container--active";
    }
    onBlur(){
        this.inputContainer.className = "Search__input-container";
    }
    render(){
        return (
            <div className="Search">
                <form className="Search__form" action="">
                        <label  ref={(label) => { this.inputContainer = label; }} className="Search__input-container" htmlFor="searchInput">
                            <input id="searchInput" type="text" className="Search__input" placeholder="Введите запрос"
                            onFocus={this.onFocus} onBlur={this.onBlur}/>
                           <button className="Search__keyboard-button"><i className="material-icons Search__icon--small">keyboard</i></button>
                        </label>
                    <button className="Search__button Search__search-button"><i className="material-icons Search__icon--small">search</i></button>
                </form>
            </div>
        );
    }
}

export default Search;