import React from 'react';
import '../style/LayoutHeader.less'
import LayoutHeaderSearch from './LayoutHeaderSearch';

const LayoutHeader = ({img}) => (
    <div className="layout-header">
        <form className="layout-header__settings" action="#">
            <button className="layout-header__button layout-header__button_upload">Upload video</button>
            <button className="layout-header__button layout-header__button_youtube-apps">Open youtube applications</button>
            <button className="layout-header__button layout-header__button_tools">Open account settings</button>
            <button className="layout-header__button_sign-in">Sign in</button>
        </form>
        <button className="layout-header__button layout-header__button_hamburger-menu">
            Toggle menu
        </button>

        <img className="layout-header__logo" src={img}/>
        <LayoutHeaderSearch/>
    </div>);


export default LayoutHeader;