import React from 'react';
import VideoSection from './VideoSection';
import videos from '../data/videosections';
import '../style/Layout.less';

const LayoutPayload = () => (
    <div className="layout__payload_wrapper">
        {videos.map(({sectionTitle, items}) =>
            <VideoSection {...{sectionTitle, items}}/>)}
    </div>
);


export default LayoutPayload;