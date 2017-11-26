import React from 'react';


const LayoutHeaderSearch = () => (
    <form className="layout-header__search-wrapper">
            <label>
                <input className="layout-header__search" type="search"/>
            </label>
            <button className="layout-header__button_search">Search</button>
    </form>
);

export default LayoutHeaderSearch;