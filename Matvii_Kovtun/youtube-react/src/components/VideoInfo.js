import React, {Component} from 'react';
import "../style/VideoInfo.less";


class VideoInfo extends Component {
    render() {
        return (
            <aside className="video-info">
                <span className="video-info__views">7 211 316 views</span>
                <div className="video-info__option">
                    <button className="video-info__button video-info__button_like">Like</button>
                    <button className="video-info__button video-info__button_dislike">Dislike</button>
                    <button className="video-info__button video-info__button_share">Share</button>
                    <button className="video-info__button video-info__button_add">Add</button>
                    <button className="video-info__button video-info__button_more">More</button>
                </div>
            </aside>);
    }
}


export default VideoInfo;