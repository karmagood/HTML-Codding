import React from 'react';
import VideoSection from './VideoSection';
import videos from '../data/videosections';

const LayoutPayload = () => (
    <div class="layout__payload_wrapper">
        {videos.map(({sectionTitle, items}) =>
            <VideoSection {...{sectionTitle, items}}/>)}
    </div>
);


export default LayoutPayload;