import React from 'react';
import Video from './Video';
import '../style/VideoSection.css';
import videos from '../data/videos';


const VideoSection = ({sectionTitle}) => (
    <section class="video-section">
        <h2 class="video-section__title">{sectionTitle}</h2>
        <div class="video-section__feed">
            {videos.map(({title, videoViews, img, time, channel}) =>
                <Video {...{title, videoViews, img, time, channel}} />)}
            <Video/>
        </div>
    </section>

);


export default VideoSection;