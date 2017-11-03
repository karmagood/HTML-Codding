import React from 'react';
import Video from './Video';

import '../style/VideoSection.css'

const videos = [
    {name: "My Videos"},
    {}
]

const VideoSection = () => (
    <section class="video-section">
        <h2 class="video-section__title">Lorem ipsum dolor.</h2>
        <div class="video-section__feed">
            {videos.map( (props) => <Video {...props} />)}
            <Video/>
            <div class="video-section__video">lorem5</div>
            <div class="video-section__video">lorem5</div>
            <div class="video-section__video">lorem5</div>
            <div class="video-section__video">lorem5</div>
        </div>
    </section>

)


export default VideoSection;