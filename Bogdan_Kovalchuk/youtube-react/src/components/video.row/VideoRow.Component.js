/**
 * Created by bogdan on 20.11.17.
 */
import React from 'react';

import VideoItem from '../video.item/VideoItem.Component'

// css styles
import './VideoRow.Component.css'

// images
// import logo from '../../logo.svg';


class VideoRow extends  React.Component{
    render(){
        return (
            <section className="VideoRow">
                <h2 className="VideoRow__header">
                    <img className="VideoRow__avatar" src="https://lh3.googleusercontent.com/-dSHgevDmDig/AAAAAAAAAAI/AAAAAAAAAAA/ANQ0kf6B-Kf1y62xpXDOZlRcSyipx0O3OQ/s32-c-mo/photo.jpg" alt=""/>
                    <span className="VideoRow__author">White Tiger</span>
                    <span className="VideoRow__label">Рекомендуемые вам</span>
                    <button className="VideoRow__button-clear"><i className="material-icons">clear</i></button>
                </h2>
                <div className="VideoRow__slider-container">
                    <VideoItem/>
                    <VideoItem/>
                    <VideoItem/>
                    <VideoItem/>
                </div>

            </section>
        );
    }
}

export default VideoRow;