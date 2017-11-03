import React from 'react';
import VideoSection from './VideoSection';
import "../style/Layout.css";
import Video from './Video';

const lorem = `orem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis
            cupiditate
            ducimus exercitationem fuga harum iure labore minus molestias nemo, officia provident quibusdam ratione,
            repudiandae, sapiente sed sequi velit veniam.`;

const Layout = ({children, Aside, Main}) => (
    <div class="layout">
        <header class="layout__header">{lorem}</header>
        <aside class="layout__user-menu"></aside>
        <main class="layout__payload">
            <VideoSection/>
        </main>
        {children}
    </div>
)

export default Layout;