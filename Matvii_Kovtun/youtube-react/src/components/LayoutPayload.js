import React from 'react';
import VideoSection from './VideoSection';
import videos from '../data/videosections';
import '../style/LayoutPayload.css';

const LayoutPayload = () => (
    <div class="payload__wrapper">
        {videos.map(({sectionTitle, items}) =>
            <VideoSection {...{sectionTitle, items}}/>)}
    </div>
);


export default LayoutPayload;