import React, {Component} from 'react';
import "../style/VideoInfo.less";


class VideoInfo extends Component {
    // TODO: Read data from json server
    render() {
        return (
            <aside className="video-info">
                <span className="video-info__views">7 211 316 views</span>
                <div className="video-info__option">
                    <button className="video-info__button video-info__button_like">713</button>
                    <button className="video-info__button video-info__button_dislike">122</button>
                    <button className="video-info__button video-info__button_share">Share</button>
                    <button className="video-info__button video-info__button_add">Add</button>
                    <button className="video-info__button video-info__button_more">More</button>
                </div>
                <div className="video-info__border-bottom"></div>
            </aside>);
    }
}


export default VideoInfo;