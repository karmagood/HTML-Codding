import React from 'react';
import '../style/LayoutUserMenu.css'
import subscriptions from '../data/subscriptions';
import Subscription from './Subscription';


const LayoutUserMenu = () => (
    <aside class="layout__user-menu">
        <nav class="user-menu__section">
            <a href="#" class="user-menu__section-element">Головна</a>
            <a href="#" class="user-menu__section-element">В тренді</a>
            <a href="#" class="user-menu__section-element">Підписки</a>
        </nav>
        <nav class="user-menu__section">
            <h3 class="user_menu__section-title">Бібліотека</h3>
            <a href="#" class="user-menu__section-element">Історія</a>
            <a href="#" class="user-menu__section-element">Дивитись пізніше</a>
            <a href="#" class="user-menu__section-element">Вподобані</a>
        </nav>
        <nav class="user-menu__section">
            <h3>Підписки</h3>
            {subscriptions.map(({channelLink, img, name}) => <Subscription {...{channelLink, img, name}}/>)}
        </nav>
    </aside>

);


export default LayoutUserMenu;