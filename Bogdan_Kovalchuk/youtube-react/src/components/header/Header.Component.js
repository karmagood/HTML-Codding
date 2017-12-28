/**
 * Created by bogdan on 04.11.17.
 */
import React from 'react';

import '../search/Search.Component';

// css styles
import './Header.Component.css'

// images
// import logo from '../../logo.svg';
import logo from '../../logo.svg';
import avatar from '../../profile_avatar.jpg';
import Search from "../search/Search.Component";


class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <div className="Header__container">
                    <button className="Header__button Header__menu-button"><i className="material-icons">menu</i></button>
                    <div className="Header__logo-container">
                        <a href="/" className="Header__logo"><img className="Header__logo" src={logo} alt=""/></a>
                        <span className="Header__language-label">UA</span>
                    </div>
                    <Search/>
                    <div className="Header__buttons-container Header__container">
                        <button className="Header__button"><i className="material-icons">file_upload</i></button>
                        <button className="Header__button"><i className="material-icons">apps</i></button>
                        <button className="Header__button"><i className="material-icons">notifications</i></button>
                        <button className="Header__button Header__profile-button">
                            <img className="Header__profile-avatar" src={avatar} alt=""/>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;