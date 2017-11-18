import React from 'react';

import "../style/Subscription.css";
import Icon from "./Icon";


const Subscription = ({channelLink, img, name, icon}) => (
    <a class="subscription" href={channelLink}>
        {icon && <Icon {...icon}/>}
        {img && <span class="subscription__image"
                      style={{backgroundImage: "url(" + img + ")"}}></span>}
        <span class="subscription__text">{name}</span>
    </a>
);


export default Subscription;