import React from 'react';
import '../style/LayoutHeader.less'


const LayoutHeader = ({img}) => (
    <div class="layout-header">
        <form class="layout-header__settings" action="#">
            <button class="layout-header__button layout-header__button-upload">Upload video</button>
            <button class="layout-header__button layout-header__button-youtube-apps">Open youtube applications</button>
            <button class="layout-header__button layout-header__button-tools">Open account settings</button>
            <button class="layout-header__button layout-header__button-sign-in">Sign in</button>
        </form>
        <button class="layout-header__button layout-header__button-hamburger-menu">

            Toggle menu
        </button>

        <img class="layout-header__logo" src={img}/>
        <form class="layout-header__search-wrapper">
            <label>
                <input class="layout-header__search" type="search"/>
            </label>

            <button>Search</button>
        </form>
    </div>);


export default LayoutHeader;