import React from 'react';
import VideoSection from './VideoSection';
import LayoutHeader from './LayoutHeader';
import UserMenu from './UserMenu';
import LayoutPayload from './LayoutPayload';
import "../style/Layout.css";

import logo from '../images/youtube-logo.jpg'


const Layout = () => (
    <div class="layout">
        <header class="layout__header"><LayoutHeader img={logo}/></header>
        <aside class="layout__user-menu"><UserMenu/></aside>
        <main class="layout__payload"><LayoutPayload/></main>
    </div>
);

export default Layout;