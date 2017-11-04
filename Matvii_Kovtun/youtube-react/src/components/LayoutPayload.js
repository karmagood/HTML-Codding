import React from 'react';
import VideoSection from './VideoSection';
import sections from '../data/sections';
import '../style/LayoutPayload.css';

const LayoutPayload = () => (
    <div class="payload__wrapper">
        {sections.map(({sectionTitle}) =>
        <VideoSection sectionTitle={sectionTitle}/>)}
    </div>
);


export default LayoutPayload;