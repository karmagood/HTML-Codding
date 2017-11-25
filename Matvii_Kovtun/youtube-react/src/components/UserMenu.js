import React from 'react';
import '../style/UserMenu.less'
import subscriptions from '../data/subscriptions';
import Subscription from './Subscription';



const UserMenu = () => (
    subscriptions.map (({title,items}) =>
    <nav className="user-menu">
        {title && <h3 className="user-menu__section-title">{title}</h3>}
        {items && items.map(({img, channelLink, name, icon, svg}) => <Subscription {...{channelLink, icon, img, name, svg}}/>)}
    </nav>
));


export default UserMenu;