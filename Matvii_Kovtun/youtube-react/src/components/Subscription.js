import React from 'react';
import '../style/LayoutUserMenu.css';
import "../style/Subscription.css";


const Subscription = ({channelLink, picture, name}) => (
    <div class="user-menu__subscription">
        <img src={picture}></img>
        <a class="user-menu__section-element" href={channelLink}>{name}</a>
    </div>

);


export default Subscription;