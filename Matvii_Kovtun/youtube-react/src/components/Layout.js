import React from 'react';
import VideoSection from './VideoSection';
import LayoutHeader from './LayoutHeader';
import LayoutUserMenu from './LayoutUserMenu';
import LayoutPayload from './LayoutPayload';
import "../style/Layout.css";

import logo from '../images/youtube-logo.jpg'


const Layout = () => (
    <div class="layout">
        <header class="layout__header"><LayoutHeader img={logo}/></header>
        <aside class="layout__user-menu"><LayoutUserMenu/></aside>
        <main class="layout__payload"><LayoutPayload/></main>
    </div>
);

export default Layout;