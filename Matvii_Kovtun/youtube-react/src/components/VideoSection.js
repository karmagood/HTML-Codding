import React from 'react';
import Video from './Video';
import '../style/VideoSection.less';


const VideoSection = ({sectionTitle, items}) => (
    <section class="video-section">
        <h2 class="video-section__title">{sectionTitle}</h2>
        <div class="video-section__feed">
            {items.map(({title, videoViews, img, time, channel}, id) =>
                <Video {...{title, videoViews, img, time, channel, id}} />)}
            <Video/>
        </div>
    </section>

);


export default VideoSection;