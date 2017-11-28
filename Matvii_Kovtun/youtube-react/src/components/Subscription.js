import React from 'react';
import "../style/Subscription.less";
import Icon from "./Icon";


const Subscription = ({channelLink, img, name, icon, svg}) => (
    <a className="subscription" href={channelLink}>
        {icon && <Icon {...{icon, svg}}/>}
        {img && <span className="subscription__image"
                      style={{backgroundImage: "url(" + img + ")"}}></span>}
        <span className="subscription__text">{name}</span>
    </a>
);


export default Subscription;